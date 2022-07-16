import { Controller, Post, HttpStatus, Param, Res, Body } from '@nestjs/common';
import { SendService } from './send.service';
import { Logger } from '@nestjs/common';
import { WhatsappCloudAPIRequest } from './dtos/whatsapp_request.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("send")
@Controller('send')
export class SendController {
    private readonly logger = new Logger("send");

    constructor(
        private sendService: SendService
    ){}

    @Post()
    sendMessage(@Body() request: WhatsappCloudAPIRequest, @Res() response){
        this.logger.warn('sendMessage')
        this.sendService.message(request).then(res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch(err => {
            console.log(err.response.data.error)
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data.error)
        })
    }
}
