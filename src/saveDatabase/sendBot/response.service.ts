import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from './interfaces/response';
import { Model } from 'mongoose';
import { DtoResponse } from './dto/create.dto';

@Injectable()
export class ResponseService {
    constructor(
        @InjectModel('Response') private Model: Model<Response>,
    ) { }

    async getAll() {
        return await this.Model.find();
    }

    async get(_id: string) {
        return await this.Model.findById(_id);
    }

    async create(registro: DtoResponse) {
        registro.date = new Date();
        registro.status = true;
        const newRegistro = new this.Model(registro);
        console.log(newRegistro);
        return await newRegistro.save();
    }

    async update(id: string, payload: any) {
        return await this.Model.findByIdAndUpdate(id, payload).setOptions({ overwrite: false, new: true });
    }
}
