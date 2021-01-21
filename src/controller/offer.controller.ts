import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OfferDTO } from 'src/dto/offer.dto';
import { OfferService } from '../service/offer.service';

@Controller('offers')
export class OfferController {

  private static readonly ID_PATH = 'id';

  constructor(private readonly offerService: OfferService) {}

  @Get()
  getOffers(): string {
    return this.offerService.getOffers();
  }

  @Get(`:${OfferController.ID_PATH}`) 
  getOfferByID(@Param(OfferController.ID_PATH) id: string): string {
    return this.offerService.getOfferByID(id);
  }

  @Post() 
  createOffer(@Body() offerDTO: OfferDTO): string {
    return this.offerService.createOffer(offerDTO);
  }

  @Delete(`:${OfferController.ID_PATH}`)
  deleteOffer(@Param(OfferController.ID_PATH) id: string): string {
    return this.offerService.deleteOffer(id);
  }

  @Patch(`:${OfferController.ID_PATH}`) 
  updateOffer(@Body() offerDTO: OfferDTO, @Param(OfferController.ID_PATH) id: string): string {
    return this.offerService.updateOffer(id);
  }
}
