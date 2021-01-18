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

@Controller()
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get('offers')
  getOffers(): string {
    return this.offerService.getOffers();
  }

  @Get('offers/:id')
  getOfferByID(@Param('id') id: string): string {
    return this.offerService.getOfferByID(id);
  }

  @Post('offers')
  createOffer(@Body() offerDTO: OfferDTO): string {
    return this.offerService.createOffer();
  }

  @Delete('offers/:id')
  deleteOffer(@Param('id') id: string): string {
    return this.offerService.deleteOffer(id);
  }

  @Patch('offers/:id')
  updateOffer(@Body() offerDTO: OfferDTO, @Param('id') id: string): string {
    return this.offerService.updateOffer(id);
  }
}
