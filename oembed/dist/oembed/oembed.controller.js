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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEmbedController = void 0;
const common_1 = require("@nestjs/common");
const wroungType_exception_1 = require("../module/exeption/wroungType.exception");
const OEmbed_dto_1 = require("./interface/OEmbed.dto");
const oembed_service_1 = require("./oembed.service");
let OEmbedController = class OEmbedController {
    constructor(oEmbedService) {
        this.oEmbedService = oEmbedService;
    }
    async callOEmbed(oembed) {
        const isStartProtocol = new RegExp(/^https?:\/\//gi);
        if (!isStartProtocol.test(oembed.url)) {
            throw new wroungType_exception_1.WroungTypeException();
        }
        return this.oEmbedService.callOEmbed(oembed.url);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OEmbed_dto_1.OEmbedDto]),
    __metadata("design:returntype", Promise)
], OEmbedController.prototype, "callOEmbed", null);
OEmbedController = __decorate([
    (0, common_1.Controller)('oembed'),
    __metadata("design:paramtypes", [oembed_service_1.OEmbedService])
], OEmbedController);
exports.OEmbedController = OEmbedController;
//# sourceMappingURL=oembed.controller.js.map