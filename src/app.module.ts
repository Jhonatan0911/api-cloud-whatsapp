import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareModuleModule } from './share_module/share_module.module';

@Module({
  imports: [ShareModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
