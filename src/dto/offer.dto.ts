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
import { OfferStatus } from 'src/constants';

export class OfferDTO {
  @IsString()
  @IsOptional()
  readonly id: string;

  @IsEnum(OfferStatus)
  @IsNotEmpty()
  status: OfferStatus;

  @IsString()
  @IsNotEmpty()
  readonly requestId: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsString()
  @Length(0, 200)
  description: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  createdBy: string;

  @IsDate()
  updatedAt: Date;

  @IsString()
  updatedBy: string;
}
