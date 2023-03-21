import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UsuarioDocument } from './schema/usuario.schema';
import { Model } from "mongoose";

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const itemCreated = await this.usuarioModel.create(createUsuarioDto);
    return itemCreated;
  }

  async findOne(username: string) {
    const usuario = await this.usuarioModel.findOne({ username: username });
    return usuario;
  }

}
