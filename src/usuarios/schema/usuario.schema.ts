import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    direccion: string;

    @Prop({ required: true })
    edad: number;

    @Prop({ required: true })
    phone: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);