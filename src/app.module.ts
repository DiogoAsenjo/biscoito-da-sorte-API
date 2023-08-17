import { Module } from '@nestjs/common';
import { BiscoitosModule } from './biscoitos/biscoitos.module';
import { BancoDeDadosModule } from './banco-de-dados/banco-de-dados.module';
import { CookiesModule } from './cookies/cookies.module';

@Module({
  imports: [BiscoitosModule, BancoDeDadosModule, CookiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
