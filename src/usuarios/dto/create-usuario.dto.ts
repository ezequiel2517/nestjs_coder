import { IsNotEmpty } from "class-validator";


export class CreateUsuarioDto {
    username: string;

    password: string;

    nombre: string;

    direccion: string;

    edad: number;

    phone: string;
}
