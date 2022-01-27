import { Body, Controller, Post } from '@nestjs/common';
import { WroungTypeException } from 'src/module/exeption/wroungType.exception';
import { OEmbedDto } from './interface/OEmbed.dto';
import { OEmbedService } from './oembed.service';

@Controller('oembed')
export class OEmbedController {
  constructor(private readonly oEmbedService: OEmbedService) {}

  @Post()
  async callOEmbed(@Body() oembed: OEmbedDto) {
    const isStartProtocol = new RegExp(/^https?:\/\//gi);
    if (!isStartProtocol.test(oembed.url)) {
      throw new WroungTypeException();
    }

    return this.oEmbedService.callOEmbed(oembed.url);
  }
}
