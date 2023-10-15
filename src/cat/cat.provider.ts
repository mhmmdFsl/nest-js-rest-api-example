import { DataSource } from 'typeorm';
import { CatEntity } from './cat.entity';

export const catProviders = [
  {
    provide: 'CAT_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(CatEntity),
    inject: ['DATA_SOURCE'],
  },
];
