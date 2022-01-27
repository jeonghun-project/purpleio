import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OEmedModule } from './oembed/oembed.module';

@Module({
  imports: [OEmedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
