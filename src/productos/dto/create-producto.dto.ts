import { IsNotEmpty } from "class-validator";

export class CreateProductoDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    thumbnail: string;
}
