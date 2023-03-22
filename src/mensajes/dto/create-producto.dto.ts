import { IsNotEmpty } from "class-validator";

export class CreateMensajeDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    edad: number;

    @IsNotEmpty()
    alias: string;

    @IsNotEmpty()
    avatar: string;

    @IsNotEmpty()
    mensaje: string;
}
