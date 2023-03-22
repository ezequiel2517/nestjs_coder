import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, ProductoDocument } from './schema/producto.schema';


@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>) {}

  async create(createProductoDto: CreateProductoDto) {
    const itemCreated = await this.productoModel.create(createProductoDto);
    return itemCreated
  }

  async findAll() {
    return await this.productoModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
