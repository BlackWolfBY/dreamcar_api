import { Injectable } from "@nestjs/common";
import { RequestDto } from "src/model/dto/request.dto";

@Injectable()
export class RequestsService {

    private requests = []

    getAll() {
        return this.requests 
    }

    getById(id: string) {
        return this.requests.find(request => request.id === id)
    }

    create(requestDto: RequestDto) {
        this.requests.push({
            ...requestDto,
            id: Date.now().toString()
        })
    }

    update(id: string, requestDto: RequestDto) {
        return `Request with id ${id} is updated`
    }

    draft(id: string) {
        return `Request with id ${id} is drafted`
    }

    close(id: string) {
        return `Request with id ${id} is closed`
    }    
}