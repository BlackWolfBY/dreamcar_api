import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { RequestDto } from "src/model/dto/request.dto";
import { RequestsService } from "src/service/request.service";

@Controller('requests')
export class RequestsController {

    constructor(private readonly requestsService: RequestsService) {
    }

    @Get()
    getAll() {
        return this.requestsService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.requestsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createRequestDto: RequestDto) {
        return this.requestsService.create(createRequestDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRequestDto: RequestDto) {
        return this.requestsService.update(id, updateRequestDto)
    }

    @Put(':id')
    draft(@Param('id') id: string) {
        return this.requestsService.draft(id)
    }

    @Put(':id')
    close(@Param('id') id: string) {
        return this.requestsService.close(id)
    }
}