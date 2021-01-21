import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
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
  @HttpCode(HttpStatus.OK) 
  getOfferByID(@Param('id') id: string): string {
    return this.offerService.getOfferByID(id);
  }

  @Post('offers')
  @HttpCode(HttpStatus.OK) 
  createOffer(@Body() offerDTO: OfferDTO): string {
    return this.offerService.createOffer(offerDTO);
  }

  @Delete('offers/:id')
  @HttpCode(HttpStatus.OK) 
  deleteOffer(@Param('id') id: string): string {
    return this.offerService.deleteOffer(id);
  }

  @Patch('offers/:id')
  @HttpCode(HttpStatus.OK) 
  updateOffer(@Body() offerDTO: OfferDTO, @Param('id') id: string): string {
    return this.offerService.updateOffer(id);
  }
}
