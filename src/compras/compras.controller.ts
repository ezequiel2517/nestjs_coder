import { Controller, Get, Post, Body, Request, Response } from '@nestjs/common';
import { AlertasService } from 'src/alertas/alertas.service';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';

@Controller('compras')
export class ComprasController {
  constructor(
    private readonly comprasService: ComprasService,
    private readonly alertasService: AlertasService
  ) { }

  @Post("/crear-compra")
  async crearCompra(@Body() createCompraDto: CreateCompraDto): Promise<CreateCompraDto> {
    return await this.comprasService.crearCompra(createCompraDto);
  }

  @Post("/finalizar-compra")
  async finalizarCompra(@Request() req: any, @Response() res: any): Promise<CreateCompraDto[]> {
    const compras = await this.comprasService.obtenerCompras(req.user.username);
    let listaCompras = "";
    compras.forEach(pedido => {
      listaCompras += "<li>" + pedido.title + "</li>";
    });
    const cuerpoMensaje =
      `
        <p>Nombre: ${req.user.username}</p>
        <p>Celular: ${req.user.phone}</p>
        <p>Lista Pedidos: </p>
        <ul>
            ${listaCompras}
        </ul>
      `
    await this.alertasService.enviarCorreo("Nueva Compra", cuerpoMensaje);
    return res.send(compras);
  }

  @Get()
  async obtenerCompras(@Request() req: any, @Response() res: any): Promise<any> {
    res.render("compras", { productos: await this.comprasService.obtenerCompras(req.user.username) });
  }

}
