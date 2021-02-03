import { Type, Expose } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { StockRequestStatus } from '../constants';

export class StockRequestDto {
  @Expose()
  id: string;

  @Expose()
  status: StockRequestStatus;

  @IsNotEmpty()
  @Type(() => String)
  @Expose()
  @IsString()
  partName: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  amount: number;

  @IsOptional()
  @Length(0, 200)
  @Type(() => String)
  @IsString()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @Expose()
  expiredAt: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  @IsOptional()
  @IsString()
  @Type(() => String)
  createdBy: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  @IsOptional()
  @IsString()
  @Type(() => String)
  updatedBy: string;
}
