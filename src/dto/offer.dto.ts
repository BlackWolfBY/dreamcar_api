import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length } from 'class-validator';
import { OfferStatus } from 'src/constants';

export class OfferDTO {

  @IsString()
  @IsOptional()
  @IsNotEmpty()
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
  @IsNotEmpty()
  price: number;

  @IsString()
  @Length(0, 200)
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
