import { Controller, Post, Request, UseGuards, Get, Response, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuardLocal } from './auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get("/login")
  getLogin(@Request() req : any, @Response() res: any) { 
    if (!req.isAuthenticated()) 
      return res.render("login");
    return res.redirect("/home");
  }

  @UseGuards(AuthGuardLocal)
  @Post('/login')
  postLogin(@Response() res: any): any {
    return res.redirect("/home");
  }

  @Get('/logout')
  logout(@Request() req: any, @Response() res: any): any {
    if (req.isAuthenticated())  {
      req.session.destroy();
      return res.render("logout", { usuario: req.user.username });
    }
    return res.redirect("/login");
  }
}
