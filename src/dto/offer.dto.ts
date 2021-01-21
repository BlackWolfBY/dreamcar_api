import { IsDate, IsEnum, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { OfferStatus } from 'src/constants';

export class OfferDTO {

  @IsString()
  @IsOptional()
  readonly id: string;

  @IsEnum(OfferStatus)
  @IsOptional()
  status: OfferStatus;

  @IsString()
  @IsOptional()
  readonly requestId: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsString()
  @IsOptional()
  createdBy: string;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsString()
  @IsOptional()
  updatedBy: string;
}
