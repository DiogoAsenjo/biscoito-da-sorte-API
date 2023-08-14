import { Module } from '@nestjs/common';
import { BiscoitosModule } from './biscoitos/biscoitos.module';

@Module({
  imports: [BiscoitosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
