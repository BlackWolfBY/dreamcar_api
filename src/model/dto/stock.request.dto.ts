import { StockRequestStatus } from '../../constants';

export class StockRequestDto {
  id: string;
  status: StockRequestStatus;
  partName: string;
  amount: number;
  description: string;
  expireAt: Date;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
