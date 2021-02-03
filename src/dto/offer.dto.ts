import { Expose } from 'class-transformer';

import { OfferStatus } from 'src/constants';

import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class OfferDTO {
  @IsString()
  @IsOptional()
  @Expose()
  readonly id: string;

  @IsEnum(OfferStatus)
  @IsNotEmpty()
  @Expose()
  status: OfferStatus;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly requestId: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @Expose()
  price: number;

  @IsString()
  @Length(0, 200)
  @Expose()
  description: string;

  @IsDate()
  @Expose()
  createdAt: Date;

  @IsString()
  @Expose()
  createdBy: string;

  @IsDate()
  @Expose()
  updatedAt: Date;

  @IsString()
  @Expose()
  updatedBy: string;
}
