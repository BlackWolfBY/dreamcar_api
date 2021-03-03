import { Expose, Type } from 'class-transformer';

import { OfferStatus } from 'src/constants';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OfferDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @Expose()
  readonly id: string;

  @ApiProperty({
    enum: OfferStatus,
    default: OfferStatus.DRAFT,
    required: true,
  })
  @IsEnum(OfferStatus)
  @IsNotEmpty()
  @Expose()
  status: OfferStatus;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly requestId: string;

  @ApiProperty({ required: true, minimum: 0 })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Expose()
  price: number;

  @ApiProperty({ minimum: 0, maximum: 200 })
  @IsOptional()
  @IsString()
  @Length(0, 200)
  @Expose()
  description: string;

  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @IsOptional()
  @IsString()
  @Expose()
  createdBy: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  @Expose()
  updatedAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;

  @IsOptional()
  @IsString()
  @Expose()
  updatedBy: string;
}
