import {
  Body,
  Controller,
  // Delete,
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
  private static readonly wrong_id_lenth =
    'Request ID should be 24 characters in length.';
  private static readonly id_not_found = 'Request with such ID was not found.';

  constructor(private readonly stockRequestsService: StockRequestService) {}

  @Get()
  getAll(): Promise<StockRequestDto[]> {
    return this.stockRequestsService.getAll();
  }

  @Get(`:${StockRequestController.ID_PATH}`)
  async getById(@Param('id') id: string): Promise<StockRequestDto> {
    if (id.length != 24) {
      throw new HttpException(
        `${StockRequestController.wrong_id_lenth}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const request = await this.stockRequestsService.getById(id);
    if (request) {
      return request;
    } else {
      throw new HttpException(
        `${StockRequestController.id_not_found}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() stockRequestDto: StockRequestDto): Promise<StockRequestDto> {
    return this.stockRequestsService.create(stockRequestDto);
  }

  @Put(`:${StockRequestController.ID_PATH}`)
  async update(
    @Param(StockRequestController.ID_PATH) id: string,
    @Body() stockRequestDto: StockRequestDto,
  ): Promise<StockRequestDto> {
    if (id.length != 24) {
      throw new HttpException(
        `${StockRequestController.wrong_id_lenth}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const request = await this.stockRequestsService.update(id, stockRequestDto);
    if (request) {
      return request;
    } else {
      throw new HttpException(
        `${StockRequestController.id_not_found}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(`:${StockRequestController.ID_PATH}/close`)
  async close(
    @Param(StockRequestController.ID_PATH) id: string,
  ): Promise<StockRequestDto> {
    if (id.length != 24) {
      throw new HttpException(
        `${StockRequestController.wrong_id_lenth}`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const request = await this.stockRequestsService.close(id);
    if (request) {
      return request;
    } else {
      throw new HttpException(
        `${StockRequestController.id_not_found}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  // @Delete()
  // delete(): string {
  //   return this.stockRequestsService.deleteAll();
  // }
}
