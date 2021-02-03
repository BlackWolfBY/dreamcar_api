import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferDTO } from 'src/dto/offer.dto';
import { OfferMapper } from 'src/mapper/offer.mapper';
import { Offer } from 'src/model/offer.model';
import { Repository } from 'typeorm';
import { OfferStatus } from 'src/constants';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
    private readonly offerMapper: OfferMapper,
  ) {}

  getOffers(): Promise<OfferDTO[]> {
    return this.offerRepository
      .find()
      .then((data) => data.map(this.offerMapper.toDto));
  }

  getOfferByID(id: string): Promise<OfferDTO> {
    const offerPromise = this.offerRepository.findOne(id);
    return offerPromise.then((offer) => this.offerMapper.toDto(offer));
  }

  createOffer(offerDTO: OfferDTO): Promise<OfferDTO> {
    return this.offerRepository
      .save(this.offerMapper.toEntity(offerDTO))
      .then((offer) => this.offerMapper.toDto(offer));
  }

  deleteOffer(id: string): Promise<OfferDTO> {
    return this.offerRepository
      .findOne(id)
      .then((offer) => {
        offer.status = OfferStatus.CLOSE;
        return this.offerRepository.save(offer);
      })
      .then((offer) => this.offerMapper.toDto(offer));
  }

  updateOffer(offerDTO: OfferDTO): Promise<OfferDTO> {
    return this.offerRepository
      .findOne(offerDTO.id)
      .then((offer) => {
        const updatedFields = this.offerMapper.toEntity(offerDTO);
        for (const value in updatedFields) {
          offer[value] = updatedFields[value];
        }
        return this.offerRepository.save(offer);
      })
      .then((offer) => this.offerMapper.toDto(offer));
  }
}
