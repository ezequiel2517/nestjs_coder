import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { LocalStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport/dist';

@Module({
  imports: [UsuariosModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule { }
