import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockRequestDto } from 'src/dto/stock.request.dto';
import { Repository } from 'typeorm';
import { StockRequest } from 'src/model/stock.request.model';
import { StockRequestMapper } from 'src/mapper/stock.request.mapper';
import { StockRequestStatus } from 'src/constants';

@Injectable()
export class StockRequestService {
  constructor(
    @InjectRepository(StockRequest)
    private requestRepository: Repository<StockRequest>,
    private readonly mapper: StockRequestMapper,
  ) {}

  async getAll(): Promise<StockRequestDto[]> {
    return this.requestRepository
      .find()
      .then((data) => data.map(this.mapper.toDto));
  }

  async getById(id: string): Promise<StockRequestDto> {
    const requestToGet = await this.requestRepository.findOne(id);
    if (requestToGet) {
      return this.mapper.toDto(requestToGet);
    } else return null;
  }

  async create(stockRequestDto: StockRequestDto): Promise<StockRequestDto> {
    return this.requestRepository
      .save(this.mapper.toEntity(stockRequestDto))
      .then((data) => this.mapper.toDto(data));
  }

  async update(
    id: string,
    stockRequestDto: StockRequestDto,
  ): Promise<StockRequestDto> {
    const requestToUpdate = await this.requestRepository.findOne(id);
    if (requestToUpdate) {
      const newValues = this.mapper.toEntity(stockRequestDto);
      for (const value in newValues) requestToUpdate[value] = newValues[value];
      this.requestRepository.save(requestToUpdate);
      return this.mapper.toDto(requestToUpdate);
    } else return null;
  }

  async close(id: string): Promise<StockRequestDto> {
    const requestToClose = await this.requestRepository.findOne(id);
    if (requestToClose) {
      requestToClose.status = StockRequestStatus.CLOSE;
      this.requestRepository.save(requestToClose);
      return this.mapper.toDto(requestToClose);
    } else return null;
  }

  // deleteAll(): string {
  //   this.requestRepository.clear();
  //   return `Requests were deleted`;
  // }
}
