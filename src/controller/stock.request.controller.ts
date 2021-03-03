import {
  Body,
  Controller,
  // Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StockRequestDto } from 'src/dto/stock.request.dto';
import { StockRequestService } from 'src/service/stock.request.service';
import { RequestNotFoundException } from 'src/exception/stock.requestNotFound.exception';
import { RequestErrorsInterceptor } from 'src/interceptor/stock.request.errors.interceptor';

@Controller('requests')
@ApiTags('requests')
export class StockRequestController {
  private static readonly ID_PATH = 'id';
  constructor(private readonly stockRequestsService: StockRequestService) {}

  @Get()
  getAll(): Promise<StockRequestDto[]> {
    return this.stockRequestsService.getAll();
  }

  @Get(`:${StockRequestController.ID_PATH}`)
  @UseInterceptors(RequestErrorsInterceptor)
  async getById(@Param('id') id: string): Promise<StockRequestDto> {
    const request = await this.stockRequestsService.getById(id);
    if (!request) {
      throw new RequestNotFoundException(id);
    } else {
      return request;
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() stockRequestDto: StockRequestDto): Promise<StockRequestDto> {
    return this.stockRequestsService.create(stockRequestDto);
  }

  @Put(`:${StockRequestController.ID_PATH}`)
  @UseInterceptors(RequestErrorsInterceptor)
  async update(
    @Param(StockRequestController.ID_PATH) id: string,
    @Body() stockRequestDto: StockRequestDto,
  ): Promise<StockRequestDto> {
    const request = await this.stockRequestsService.update(id, stockRequestDto);
    if (!request) {
      throw new RequestNotFoundException(id);
    } else {
      return request;
    }
  }

  @Patch(`:${StockRequestController.ID_PATH}/close`)
  @UseInterceptors(RequestErrorsInterceptor)
  async close(
    @Param(StockRequestController.ID_PATH) id: string,
  ): Promise<StockRequestDto> {
    const request = await this.stockRequestsService.close(id);
    if (!request) {
      throw new RequestNotFoundException(id);
    } else {
      return request;
    }
  }

  // @Delete()
  // delete(): string {
  //   return this.stockRequestsService.deleteAll();
  // }
}
