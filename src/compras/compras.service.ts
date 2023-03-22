import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompraDocument, Compra } from './schema/compra.schema';

@Injectable()
export class ComprasService {
  constructor(@InjectModel(Compra.name) private compraModel: Model<CompraDocument>) { }

  async crearCompra(createCompraDto: CreateCompraDto): Promise<CreateCompraDto> {
    return await this.compraModel.create(createCompraDto);
  }

  async obtenerCompras(usuario: string): Promise<CreateCompraDto[]> {
    return await this.compraModel.find({ username: usuario });
  }

}
