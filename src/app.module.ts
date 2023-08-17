import { Module } from '@nestjs/common';
import { BiscoitosModule } from './biscoitos/biscoitos.module';
import { BancoDeDadosModule } from './banco-de-dados/banco-de-dados.module';

@Module({
  imports: [BiscoitosModule, BancoDeDadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
