import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AlertasService } from './alertas.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          service: "gmail",
          port: 587,
          auth: {
            user: process.env.USER_MAIL,
            pass: process.env.PASS_MAIL
          }
        }
      }),
    }),
  ],
  providers: [AlertasService]
})
export class AlertasModule { }
