import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MensajeDocument = HydratedDocument<Mensaje>;

@Schema()
export class Mensaje {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    apellido: string;

    @Prop({ required: true })
    edad: number;

    @Prop({ required: true })
    alias: string;

    @Prop({ required: true })
    avatar: string;

    @Prop({ required: true })
    mensaje: string;
}

export const MensajeSchema = SchemaFactory.createForClass(Mensaje);