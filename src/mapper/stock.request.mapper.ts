import { Injectable } from '@nestjs/common';

import { StockRequestDto } from 'src/dto/stock.request.dto';
import { StockRequest } from 'src/model/stock.request.model';
import { DefaultMapper } from './default.mapper';

@Injectable()
export class StockRequestMapper extends DefaultMapper<
  StockRequest,
  StockRequestDto
> {
  constructor() {
    super(StockRequest, StockRequestDto);
  }
}
