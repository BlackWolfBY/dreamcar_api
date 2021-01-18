import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './service/app.service';
import { AppController } from './controller/app.controller';
import { OfferController } from './controller/offer.controller';
import { StockRequest } from './model/request.model';
import { Offer } from './model/offer.model';
import { Role } from './model/role.model';
import { User } from './model/user.model';
import { RoleFunction } from './model/function.model';
import { OfferService } from './service/offer.service';

@Module({
  imports: [
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
  controllers: [AppController, OfferController],
  providers: [AppService, OfferService],
})
export class AppModule {}
