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
    if (!requestToGet) return null;
    else return this.mapper.toDto(requestToGet);
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
    if (!requestToUpdate) return null;
    else {
      const updatedRequest = this.requestRepository.merge(
        requestToUpdate,
        this.mapper.toEntity(stockRequestDto),
      );
      this.requestRepository.save(updatedRequest);
      return this.mapper.toDto(requestToUpdate);
    }
  }

  async close(id: string): Promise<StockRequestDto> {
    const requestToClose = await this.requestRepository.findOne(id);
    if (!requestToClose) return null;
    else {
      requestToClose.status = StockRequestStatus.CLOSE;
      this.requestRepository.save(requestToClose);
      return this.mapper.toDto(requestToClose);
    }
  }

  // deleteAll(): string {
  //   this.requestRepository.clear();
  //   return `Requests were deleted`;
  // }
}
