import { Module } from '@nestjs/common';
import { BiscoitosController } from './biscoitos.controller';
import { BiscoitosPositivosService } from './biscoitos.positivos.service';
import { BiscoitosNegativosService } from './biscoitos.negativos.service';

@Module({
  controllers: [BiscoitosController],
  providers: [BiscoitosPositivosService, BiscoitosNegativosService]
})
export class BiscoitosModule {}
