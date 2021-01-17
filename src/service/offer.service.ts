import { Injectable } from '@nestjs/common';

@Injectable()
export class OfferService {
  getOffers(): string {
    return 'Offers list';
  }

  getOfferByID(id: string): string {
    return 'getOfferByID ' + id;
  }

  createOffer(): string {
    return 'Было создано новое предложение.';
  }

  deleteOffer(id): string {
    return 'Предложение ' + id + ' было удалено.';
  }

  updateOffer(id): string {
    return 'Предложение ' + id + ' было изменено.';
  }
}
