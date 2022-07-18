import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from './interfaces/request';
import { Model } from 'mongoose';
import { Dto } from './dto/create.dto';

@Injectable()
export class RequestService {
    constructor(
        @InjectModel('Request') private Model: Model<Request>,
    ) { }

    async getAll() {
        return await this.Model.find();
    }

    async get(_id: string) {
        return await this.Model.findById(_id);
    }

    async create(registro: Dto) {
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
