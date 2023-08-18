import { Module } from '@nestjs/common';
import { BiscoitosModule } from './biscoitos/biscoitos.module';
import { BancoDeDadosModule } from './banco-de-dados/banco-de-dados.module';
import { CookiesModule } from './cookies/cookies.module';
import { BiscoitosController } from './biscoitos/biscoitos.controller';
import { CookiesController } from './cookies/cookies.controller';
import { BiscoitosNegativosService } from './biscoitos/biscoitos.negativos.service';
import { BiscoitosPositivosService } from './biscoitos/biscoitos.positivos.service';
import { CookiesService } from './cookies/cookies.service';

@Module({
  imports: [BiscoitosModule, BancoDeDadosModule, CookiesModule],
  controllers: [BiscoitosController, CookiesController],
  providers: [BiscoitosNegativosService, BiscoitosPositivosService, CookiesService],
})
export class AppModule {}
