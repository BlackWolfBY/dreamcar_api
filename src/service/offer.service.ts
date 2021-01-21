import { Injectable } from '@nestjs/common';
import { OfferDTO } from 'src/dto/offer.dto';

@Injectable()
export class OfferService {
  getOffers(): string {
    return 'Offers list';
  }

  getOfferByID(id: string): string {
    return 'getOfferByID ' + id;
  }

  createOffer(offerDTO: OfferDTO): string {
    return 'Было создано новое предложение.';
  }

  deleteOffer(id: string): string {
    return 'Предложение ' + id + ' было удалено.';
  }

  updateOffer(id: string): string {
    return 'Предложение ' + id + ' было изменено.';
  }
}
