import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StockRequestDto } from 'src/dto/stock.request.dto';
import { StockRequestService } from 'src/service/stock.request.service';

@Controller('requests')
export class StockRequestController {
  private static readonly ID_PATH = 'id';

  constructor(private readonly stockRequestsService: StockRequestService) {}

  @Get()
  getAll(): StockRequestDto[] {
    return this.stockRequestsService.getAll();
  }

  @Get(`:${StockRequestController.ID_PATH}`)
  getById(@Param('id') id: string): StockRequestDto {
    const request = this.stockRequestsService.getById(id);
    if (request) {
      return request;
    } else
      throw new HttpException(
        `No request with ID ${id} was found`,
        HttpStatus.NOT_FOUND,
      );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() stockRequestDto: StockRequestDto): StockRequestDto {
    return this.stockRequestsService.create(stockRequestDto);
  }

  @Put(`:${StockRequestController.ID_PATH}`)
  update(
    @Param(StockRequestController.ID_PATH) id: string,
    @Body() stockRequestDto: StockRequestDto,
  ): string {
    const request = this.stockRequestsService.update(id, stockRequestDto);
    if (request) {
      return `Request with id ${id} was updated`;
    } else
      throw new HttpException(
        `No request with ID ${id} was found`,
        HttpStatus.NOT_FOUND,
      );
  }

@Patch(`:${StockRequestController.ID_PATH}/close`)
  close(@Param(StockRequestController.ID_PATH) id: string): string {
    const request = this.stockRequestsService.close(id);
    if (request) {
      return `Request with id ${id} was closed`;
    } else
      throw new HttpException(
        `No request with ID ${id} was found`,
        HttpStatus.NOT_FOUND,
      );
  }
}
