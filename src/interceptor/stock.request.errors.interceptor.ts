import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestNotFoundException } from 'src/exception/stock.requestNotFound.exception';

@Injectable()
export class RequestErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof RequestNotFoundException) {
          throw new NotFoundException(error.message);
        } else {
          throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
        }
      }),
    );
  }
}
