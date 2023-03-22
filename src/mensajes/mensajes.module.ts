import { Module } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { MensajesGateway } from './mensajes.gateway';
import { Mensaje, MensajeSchema } from './schema/mensaje.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Mensaje.name,
      schema: MensajeSchema
    }])
  ],
  providers: [MensajesGateway, MensajesService]
})
export class MensajesModule { }
