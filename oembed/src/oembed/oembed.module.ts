import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OEmbedService } from './oembed.service';
import { OEmbedController } from './oembed.controller';

@Module({
  imports: [HttpModule],
  providers: [OEmbedService],
  controllers: [OEmbedController],
})
export class OEmedModule {}
