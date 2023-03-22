import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from "bcrypt";
import { Usuario, UsuarioDocument } from './schema/usuario.schema';
import { Model } from "mongoose";

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 8);
    createUsuarioDto.password = hashedPassword;
    const itemCreated = await this.usuarioModel.create(createUsuarioDto);
    return itemCreated;
  }

  async findOne(username: string) {
    const usuario = await this.usuarioModel.findOne({ username: username });
    return usuario;
  }

}
