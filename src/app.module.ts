import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareModuleModule } from './share_module/share_module.module';

import { MongooseModule } from '@nestjs/mongoose';
import { RequestModule } from './saveDatabase/sendUser/request.module';
import { ResponseModule } from './saveDatabase/sendBot/response.module';
@Module({
  imports: [ 
    ShareModuleModule,
    RequestModule,
    ResponseModule,
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.zcerhsd.mongodb.net/?retryWrites=true&w=majority'),
  ],
  controllers: [ 
    AppController,
  ],
  providers: [ 
    AppService, 
  ],
})
export class AppModule {}
