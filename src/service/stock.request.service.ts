import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { StockRequestDto } from 'src/dto/stock.request.dto';

@Injectable()
export class StockRequestService {
  private stockRequests = [];

  getAll() {
    if (this.stockRequests.length !== 0) {
      return this.stockRequests;
    } else
      throw new HttpException('No active requests exist', HttpStatus.NOT_FOUND);
  }

  getById(id: string) {
    const request = this.stockRequests.find(
      (stockRequest) => stockRequest.id === id,
    );
    if (request) {
      return request;
    } else
      throw new HttpException(
        'No request with such ID found',
        HttpStatus.NOT_FOUND,
      );
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
    const request = this.stockRequests.find(
      (stockRequest) => stockRequest.id === id,
    );
    if (request) {
      return `Request with id ${id} is updated`;
    } else
      throw new HttpException(
        'No request with such ID found',
        HttpStatus.NOT_FOUND,
      );
  }

  draft(id: string): string {
    const request = this.stockRequests.find(
      (stockRequest) => stockRequest.id === id,
    );
    if (request) {
      return `Request with id ${id} is drafted`;
    } else
      throw new HttpException(
        'No request with such ID found',
        HttpStatus.NOT_FOUND,
      );
  }

  close(id: string): string {
    const request = this.stockRequests.find(
      (stockRequest) => stockRequest.id === id,
    );
    if (request) {
      return `Request with id ${id} is closed`;
    } else
      throw new HttpException(
        'No request with such ID found',
        HttpStatus.NOT_FOUND,
      );
  }
}
