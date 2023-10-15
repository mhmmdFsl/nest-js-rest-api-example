import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import dbConfig from '../configuration/database.config';
import { Logger } from '@nestjs/common';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (config: ConfigType<typeof dbConfig>) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.name,
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [dbConfig.KEY],
  },
];
