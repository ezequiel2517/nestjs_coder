import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(private readonly usuariosService: UsuariosService) {
    }

    async validarUsuario(username: string, password: string): Promise<any> {
        let usuario: CreateUsuarioDto = await this.usuariosService.findOne(username);
        let res : boolean = false;
        if (usuario) {
            res = await bcrypt.compare(password, usuario.password);   
        }
        if(!res)
            usuario = null;
        return usuario;
    }
}
