"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEmbedService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let OEmbedService = class OEmbedService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    oembedRequest(api) {
        return this.httpService.get(`${api}`).pipe((0, rxjs_1.map)((res) => res.data), (0, rxjs_1.catchError)((err) => (0, rxjs_1.of)(`error : ${err}`)));
    }
    getOEmbed(host, url) {
        console.log(host, encodeURIComponent(url));
        let stream;
        if (host === 'www.twitter.com' || host === 'twitter.com') {
            stream = this.oembedRequest(`https://publish.twitter.com/oembed?url=${url}`);
        }
        else if (host === 'www.youtube.com' || host === 'youtube.com') {
            stream = this.oembedRequest(`https://${host}/oembed?url=${encodeURIComponent(url)}&format=json`);
        }
        else if (host === 'www.vimeo.com' || host === 'vimeo.com') {
            stream = this.oembedRequest(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`);
        }
        else if (host === 'www.instagram.com' || host === 'instagram.com') {
            stream = this.oembedRequest(`https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`);
        }
        else {
            stream = this.oembedRequest(`https://${host}/oembed/?url=${encodeURIComponent(url)}`);
        }
        stream.subscribe(console.log);
        return stream;
    }
    callOEmbed(url) {
        const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/gi;
        const host = regex.exec(url);
        return this.getOEmbed(host[0], url);
    }
};
OEmbedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], OEmbedService);
exports.OEmbedService = OEmbedService;
//# sourceMappingURL=oembed.service.js.map