import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InfoModule } from './info/info.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { MensajesModule } from './mensajes/mensajes.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { AppMidleware } from './app.middleware';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://ezequiel:ezequiel@cluster0.v5hpbf0.mongodb.net/ecommerce?retryWrites=true&w=majority"),
    ProductosModule,
    InfoModule,
    UsuariosModule,
    AuthModule,
    MensajesModule,
    ComprasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude("/login", "/signup")
      .forRoutes('*')

      .apply(AppMidleware)
      .exclude("/login", "/home", "/info", "/logout", "/signup", "/signup-error", "/productos", "/compras")
      .forRoutes("*")
  }
}
