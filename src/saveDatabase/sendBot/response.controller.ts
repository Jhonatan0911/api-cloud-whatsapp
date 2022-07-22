import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DtoResponse } from './dto/create.dto';
import { ResponseService } from './response.service';
import { Response } from './interfaces/response';


@ApiTags('Response')
@Controller('response')
export class ResponseController {

    constructor(
        private Service: ResponseService
    ){}

    @Get()
    getAll(): Promise<Response[]> {
        return this.Service.getAll();
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.Service.get(id);
    }

    @Post()
    create(@Body() Response: DtoResponse): Promise<Response> {
        console.log(Response);
        return this.Service.create(Response);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.Service.update(id, payload);
    }
}