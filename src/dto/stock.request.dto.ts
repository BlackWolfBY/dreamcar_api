import { Expose } from 'class-transformer';
import { StockRequestStatus } from '../constants';

export class StockRequestDto {
  @Expose()
  id: string;

  @Expose()
  status: StockRequestStatus;

  @Expose()
  partName: string;

  @Expose()
  amount: number;

  @Expose()
  description: string;

  @Expose()
  expireAt: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  updatedBy: string;
}
