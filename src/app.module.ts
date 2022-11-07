import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_CONFIG } from './configs/db-config';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forRoot(DB_CONFIG), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
