import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class AlertasService {
    constructor(private mailerService: MailerService) {}
    
    async enviarCorreo(subject: string, html: string){
        await this.mailerService.sendMail({
            to: process.env.ADMIN_MAIL,
            subject,
            html
        })
    }
}
