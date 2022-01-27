import { OEmbedDto } from './interface/OEmbed.dto';
import { OEmbedService } from './oembed.service';
export declare class OEmbedController {
    private readonly oEmbedService;
    constructor(oEmbedService: OEmbedService);
    callOEmbed(oembed: OEmbedDto): Promise<import("rxjs").Observable<import("axios").AxiosResponse<any, any>>>;
}
