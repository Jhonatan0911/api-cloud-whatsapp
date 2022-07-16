import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/httpService.config';
import { Module } from '@nestjs/common';
import { SendController } from './send/send.controller';
import { SendService } from './send/send.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService
    }),
    ShareModuleModule
  ],
  controllers: [SendController],
  providers: [SendService]
})
export class ShareModuleModule {}
