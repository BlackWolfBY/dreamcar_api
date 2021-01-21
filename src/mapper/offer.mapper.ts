import { Injectable } from '@nestjs/common';

import { OfferDTO } from 'src/dto/offer.dto';
import { Offer } from 'src/model/offer.model';
import { DefaultMapper } from './default.mapper';

@Injectable()
export class OfferMapper extends DefaultMapper<Offer, OfferDTO> {
  constructor() {
    super(Offer, OfferDTO);
  }
}
