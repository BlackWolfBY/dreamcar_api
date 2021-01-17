import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { RequestsModule } from './model/request.module';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './service/app.service';
import { StockRequest } from './model/request.model';
import { Offer } from './model/offer.model';
import { Role } from './model/role.model';
import { User } from './model/user.model';
import { RoleFunction } from './model/function.model';

@Module({
  imports: [
    RequestsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      url: process.env.MONGO_URL,
      database: process.env.MONGO_DB,
      type: 'mongodb',
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([StockRequest, Offer, Role, User, RoleFunction]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
