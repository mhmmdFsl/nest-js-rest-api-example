import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
