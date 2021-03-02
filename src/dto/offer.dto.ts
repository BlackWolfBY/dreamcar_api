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

export class OfferDTO {
  @IsString()
  @IsOptional()
  @Expose()
  readonly id: string;

  @Expose()
  status: OfferStatus;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly requestId: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Expose()
  price: number;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  @Expose()
  description: string;

  @Expose()
  createdAt: Date;

  @IsOptional()
  @IsString()
  @Expose()
  createdBy: string;

  @Expose()
  updatedAt: Date;

  @IsOptional()
  @IsString()
  @Expose()
  updatedBy: string;
}
