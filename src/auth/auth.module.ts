import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthUtilSessionSerialize } from './auth.util.sessionSerialize';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from './auth.middleware';

@Module({
  imports: [UsuariosModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, AuthStrategy, AuthUtilSessionSerialize]
})
export class AuthModule {}