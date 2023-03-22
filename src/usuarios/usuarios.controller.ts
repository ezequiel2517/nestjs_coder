import { Controller, Get, Post, Body, Response, UseInterceptors, UploadedFile, Render, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Get("/signup")
  @Render("signup")
  root() {

  }
  
  @Post("/signup")
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public");
      },
      filename: (req, file, cb) => {
        cb(null, `/${req.body.username}${path.extname(file.originalname)}`);
      },
    })
  }))

  async signup(
    @UploadedFile() image: Express.Multer.File, 
    @Body() createUsuarioDto : CreateUsuarioDto,
    @Response() res
    ) {
    const usuario : CreateUsuarioDto = await this.usuariosService.create(createUsuarioDto);
    usuario && res.redirect("login");
  }

}
