import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './service/app.service';
import { StockRequest } from './model/stock.request.model';
import { AppController } from './controller/app.controller';
import { OfferController } from './controller/offer.controller';
import { StockRequest } from './model/request.model';
import { Offer } from './model/offer.model';
import { Role } from './model/role.model';
import { User } from './model/user.model';
import { RoleFunction } from './model/function.model';
import { StockRequestService } from './service/stock.request.service';
import { StockRequestController } from './controller/stock.request.controller';
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
  controllers: [AppController, OfferController, StockRequestController],
  providers: [AppService, OfferService, StockRequestService],
})
export class AppModule {}
