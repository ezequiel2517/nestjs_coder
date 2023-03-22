import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Compra, CompraSchema } from './schema/compra.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Compra.name,
      schema: CompraSchema
    }])
  ],
  controllers: [ComprasController],
  providers: [ComprasService]
})
export class ComprasModule { }
