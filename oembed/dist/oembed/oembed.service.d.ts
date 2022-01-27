import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class OEmbedService {
    private httpService;
    constructor(httpService: HttpService);
    oembedRequest(api: string): Observable<AxiosResponse>;
    getOEmbed(host: string, url: string): Observable<AxiosResponse>;
    callOEmbed(url: string): Observable<AxiosResponse<any, any>>;
}
