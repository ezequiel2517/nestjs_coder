import { Controller, Get, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from "fs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("home")
  getHome(@Request() req: any, @Response() res): any {
    const perfil = fs.readdirSync("public/").find(file => {
      return file.split(".")[0] == req.user.username
    });

    res.render("home",
      {
        usuario: req.user.username,
        perfil: `http://localhost:${req.socket.localPort}/${perfil}`
      })
  }
}
