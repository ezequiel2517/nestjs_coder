import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usuariosService: UsuariosService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usuariosService.buscarUsuario(username);
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        const passwordValida = await bcrypt.compare(password, user.password);
        if (user && passwordValida) {
            return user
        }
        return null;
    }
}
