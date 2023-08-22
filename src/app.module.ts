import { Module } from '@nestjs/common';
import { BancoDeDadosModule } from './banco-de-dados/banco-de-dados.module';
import { CookiesModule } from './cookies/cookies.module';
import { CookiesController } from './cookies/cookies.controller';
import { CookiesService } from './cookies/cookies.service';

@Module({
  imports: [BancoDeDadosModule, CookiesModule],
  controllers: [CookiesController],
  providers: [CookiesService],
})
export class AppModule {}
