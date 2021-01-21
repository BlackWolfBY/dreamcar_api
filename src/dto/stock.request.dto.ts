import { Type } from 'class-transformer';
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
  id: string;
  status: StockRequestStatus;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  partName: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  amount: number;

  @IsOptional()
  @Length(0, 200)
  @Type(() => String)
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  expireAt: Date;
  createdAt: Date;

  @IsOptional()
  @IsString()
  @Type(() => String)
  createdBy: string;
  updatedAt: Date;

  @IsOptional()
  @IsString()
  @Type(() => String)
  updatedBy: string;
}
