import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  password: process.env.DATABASE_PASSWORD || 'apaaja',
  username: process.env.DATABASE_USERNAME || 'postgres',
  name: process.env.DATABASE_NAME || 'postgres',
}));
