import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from '../users/users.entity';

export const DB_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: JSON.parse(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users],
    synchronize: true,
};
