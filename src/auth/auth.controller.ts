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

  @Get('/login-error')
  loginError(@Request() req : any, @Response() res: any) { 
    if (!req.isAuthenticated()) 
      return res.render("login-error");
    return res.redirect("/login");
  }

  @Get('/logout')
  logout(@Request() req: any, @Response() res: any): any {
    req.session.destroy();
    return res.render("logout", { usuario: req.user.username });
  }
}
