import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompraDocument = HydratedDocument<Compra>;

@Schema()
export class Compra {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    username: string;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);