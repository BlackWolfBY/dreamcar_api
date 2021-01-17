import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { RequestsModule } from './model/request.module';
import { AppService } from './service/app.service';

@Module({
  imports: [RequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
