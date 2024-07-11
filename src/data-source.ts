import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from './env';

import './database/migration/1720636570895-CreateUser';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.TYPEORM_HOST,
  port: env.TYPEORM_PORT,
  username: env.TYPEORM_USERNAME,
  password: env.TYPEORM_PASSWORD,
  database: env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['./src/entities/*.ts'],
  migrations: ['./src/database/migration/*.ts'],
  subscribers: [],
});

AppDataSource.initialize().catch((error) => console.log(error));
