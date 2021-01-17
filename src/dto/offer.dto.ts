export class OfferDTO {
  readonly id: string;
  status: string;
  readonly requestId: string;
  price: number;
  decription: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
