import { IsNotEmpty } from "class-validator";

export class CreateCompraDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    username: string;
}
