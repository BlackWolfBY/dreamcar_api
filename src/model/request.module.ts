import { Module } from "@nestjs/common";
import { RequestsController } from "src/controller/request.controller";
import { RequestsService } from "src/service/request.service";

@Module({
    providers: [RequestsService],
    controllers: [RequestsController],
    imports: []
})

export class RequestsModule {
}