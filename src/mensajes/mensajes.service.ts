import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMensajeDto } from './dto/create-producto.dto';
import { Mensaje, MensajeDocument } from './schema/mensaje.schema';

@Injectable()
export class MensajesService {
    constructor(@InjectModel(Mensaje.name) private mensajeModel: Model<MensajeDocument>) { }

    async findAll(): Promise<CreateMensajeDto[]> {
        return await this.mensajeModel.find();
    }

    async create(ceateMensajeDto: CreateMensajeDto) {
        const mensajeCreated = await this.mensajeModel.create(ceateMensajeDto);
        return mensajeCreated
    }
}
