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
import { ComprasModule } from './compras/compras.module';
import { AlertasService } from './alertas/alertas.service';
import { AlertasModule } from './alertas/alertas.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundExceptionFilter } from 'src/app.exceptions';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: join(__dirname, `env/.env.${process.env.NODE_ENV}`),
      envFilePath: join(__dirname, `env/.env.dev`),
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    ProductosModule,
    InfoModule,
    UsuariosModule,
    AuthModule,
    MensajesModule,
    ComprasModule,
    AlertasModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AlertasService,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude("/login", "/signup")
      .forRoutes('*')
  }
}
