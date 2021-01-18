import { OfferStatus } from 'src/constants';

export class OfferDTO {
  readonly id: string;
  status: OfferStatus;
  readonly requestId: string;
  price: number;
  decription: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
