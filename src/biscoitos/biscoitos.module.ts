import { Module } from '@nestjs/common';
import { BiscoitosController } from './biscoitos.controller';
import { BiscoitosService } from './biscoitos.service';

@Module({
  controllers: [BiscoitosController],
  providers: [BiscoitosService]
})
export class BiscoitosModule {}
