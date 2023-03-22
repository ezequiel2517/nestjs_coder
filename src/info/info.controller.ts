import { Controller, Get, Render, Request, Response } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) { }

  @Get()
  info(@Request() req, @Response() res) {
    if (req.isAuthenticated())
      return res.render("info", this.infoService.getInfo())

    res.redirect("login")
  }
}
