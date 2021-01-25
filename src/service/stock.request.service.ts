import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { StockRequestDto } from 'src/dto/stock.request.dto';

@Injectable()
export class StockRequestService {
  private stockRequests = [];

  getAll() {
    return this.stockRequests;
  }

  getById(id: string) {
    return this.stockRequests.find((stockRequest) => stockRequest.id === id);
  }

  create(stockRequestDto: StockRequestDto): StockRequestDto {
    const newStockRequest = {
      ...stockRequestDto,
      id: Date.now().toString(),
    };
    this.stockRequests.push(newStockRequest);
    return newStockRequest;
  }

  update(id: string, stockRequestDto: StockRequestDto): string {
    return this.stockRequests.find((stockRequest) => stockRequest.id === id);
  }

  draft(id: string): string {
    return this.stockRequests.find((stockRequest) => stockRequest.id === id);
  }

  close(id: string): string {
    return this.stockRequests.find((stockRequest) => stockRequest.id === id);
  }
}
