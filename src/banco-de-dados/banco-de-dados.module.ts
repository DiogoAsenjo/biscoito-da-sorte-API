import { Module } from '@nestjs/common';
import { databaseProviders } from './banco.config';

@Module({
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class BancoDeDadosModule {}
