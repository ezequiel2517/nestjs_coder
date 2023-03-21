import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://ezequiel:ezequiel@cluster0.v5hpbf0.mongodb.net/ecommerce?retryWrites=true&w=majority"),
    ProductosModule,
    InfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
