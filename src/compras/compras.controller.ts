import { Controller, Get, Post, Body, Request, Response } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.comprasService.crearCompra(createCompraDto);
  }

  @Get()
  async obtenerCompras(@Request() req: any, @Response() res : any) {
    res.render("compras", { productos: await this.comprasService.obtenerCompras(req.user.username)});
  }

}
