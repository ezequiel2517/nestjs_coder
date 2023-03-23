import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { resolve } from 'path';
import * as session from "express-session"
import * as passport from "passport";
import * as fs from "fs";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useStaticAssets(resolve('./public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }

  await app.listen(process.env.PORT);
}
bootstrap();
