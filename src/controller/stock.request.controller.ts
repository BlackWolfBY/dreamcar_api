import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { StockRequestDto } from "src/model/dto/stock.request.dto";
import { StockRequestService } from "src/service/stock.request.service";

@Controller('requests')
export class StockRequestController {

    constructor(private readonly stockRequestsService: StockRequestService) {
    }

    @Get()
    getAll(): StockRequestDto[] {
        return this.stockRequestsService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): StockRequestDto {
        return this.stockRequestsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() stockRequestDto: StockRequestDto): StockRequestDto {
        return this.stockRequestsService.create(stockRequestDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() stockRequestDto: StockRequestDto): string {
        return this.stockRequestsService.update(id, stockRequestDto)
    }

    @Patch(':id/draft')
    draft(@Param('id') id: string): string {
        return this.stockRequestsService.draft(id)
    }

    @Patch(':id/close')
    close(@Param('id') id: string): string {
        return this.stockRequestsService.close(id)
    }
}