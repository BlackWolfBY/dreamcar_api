import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OfferService } from './service/offer.service';
import { StockRequestService } from './service/stock.request.service';
import { OfferController } from './controller/offer.controller';
import { StockRequestController } from './controller/stock.request.controller';
import { StockRequest } from './model/stock.request.model';
import { Offer } from './model/offer.model';
import { Role } from './model/role.model';
import { User } from './model/user.model';
import { RoleFunction } from './model/function.model';

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
  controllers: [OfferController, StockRequestController],
  providers: [OfferService, StockRequestService],
})
export class AppModule {}
