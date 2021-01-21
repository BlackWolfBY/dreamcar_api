import { Expose } from 'class-transformer';

import { OfferStatus } from 'src/constants';

export class OfferDTO {
  @Expose()
  readonly id: string;

  @Expose()
  readonly requestId: string;

  @Expose()
  status: OfferStatus;

  @Expose()
  price: number;

  @Expose()
  decription: string;

  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  updatedBy: string;
}
