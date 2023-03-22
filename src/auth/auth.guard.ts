import { Injectable } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ExecutionContext } from "@nestjs/common"

@Injectable()
export class AuthGuardLocal extends AuthGuard("local") {
    async canActivate(context: ExecutionContext) {
        try {
            const result = (await super.canActivate(context)) as boolean;
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
            return result;
        }
        catch (err) {
            return context.switchToHttp().getResponse().render("login-error");
        }
    }
}