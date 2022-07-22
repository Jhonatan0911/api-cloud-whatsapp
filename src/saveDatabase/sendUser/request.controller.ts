import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Dto } from './dto/create.dto';
import { RequestService } from './request.service';
import { Request } from './interfaces/request';


@ApiTags('Requests')
@Controller('user')
export class RequestController {

    constructor(
        private Service: RequestService
    ){}

    @Get()
    getAll(): Promise<Request[]> {
        return this.Service.getAll();
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.Service.get(id);
    }

    @Post()
    create(@Body() Request: Dto): Promise<Request> {
        console.log(Request);
        return this.Service.create(Request);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.Service.update(id, payload);
    }
}
