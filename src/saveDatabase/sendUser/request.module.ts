import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from 'src/saveDatabase/sendUser/schemas/Request.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Request', schema: RequestSchema }]),
    ],
    controllers: [ 
        RequestController 
    ],
    providers: [ 
        RequestService 
    ],
})
export class RequestModule {}