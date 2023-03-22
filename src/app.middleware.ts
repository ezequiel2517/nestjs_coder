import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMidleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req.isAuthenticated())
            return res.redirect("/login");
        return res.redirect("/home");
    }
}
