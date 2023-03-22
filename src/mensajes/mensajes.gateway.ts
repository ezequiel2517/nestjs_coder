import { OnGatewayConnection, WebSocketGateway, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { MensajesService } from './mensajes.service';
import { Server } from 'socket.io';
import { CreateMensajeDto } from './dto/create-producto.dto';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@WebSocketGateway()
export class MensajesGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(private readonly mensajesService: MensajesService) { }

  async handleConnection() {
    const chat: CreateMensajeDto[] = await this.mensajesService.findAll();
    this.server.emit("nuevo_cliente", chat);
  }

  @SubscribeMessage('nuevo_mensaje')
  async nuevoMensaje(@Body() createMensajeDto: CreateMensajeDto) {
    const mensajeCreated : CreateMensajeDto = await this.mensajesService.create(createMensajeDto);
    this.server.emit("nuevo_mensaje", mensajeCreated);
  }

}
