import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BASEURL } from 'src/common/api_resource';
import { firstValueFrom } from 'rxjs';
import { WhatsappCloudAPIRequest } from './dtos/whatsapp_request.dto';
import { WhatsappCloudAPIResponse } from './dtos/whatsapp_response.dto';


@Injectable()
export class SendService {
    constructor(
        private httpService: HttpService
    ){}

    baseUrl = BASEURL.urlWhatsAppCloudApi;

    async message(request:WhatsappCloudAPIRequest): Promise<AxiosResponse<WhatsappCloudAPIResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log("reponse data",data);
        return data; 
    }
}
