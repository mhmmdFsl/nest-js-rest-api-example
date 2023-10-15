import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { ConfigModule } from '@nestjs/config';
import dbConfig from '../configuration/database.config';

@Module({
  imports: [ConfigModule.forFeature(dbConfig)],
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
