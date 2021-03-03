import { Type, Expose } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StockRequestStatus } from '../constants';

export class StockRequestDto {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty({
    enum: StockRequestStatus,
    default: StockRequestStatus.DRAFT,
  })
  @Expose()
  status: StockRequestStatus;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Type(() => String)
  @Expose()
  @IsString()
  partName: string;

  @ApiProperty({ required: true, minimum: 1 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  amount: number;

  @ApiProperty({ minimum: 0, maximum: 200 })
  @IsOptional()
  @Length(0, 200)
  @Type(() => String)
  @IsString()
  @Expose()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @Expose()
  expiredAt: Date;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  @Type(() => String)
  createdBy: string;

  @ApiProperty()
  @Expose()
  updatedAt: Date;

  @ApiProperty()
  @Expose()
  @IsOptional()
  @IsString()
  @Type(() => String)
  updatedBy: string;
}
