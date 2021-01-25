import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * Tells NestJS to strip the validated (i.e., returned) object of any properties
       * that do not use any validation decorators. This of course means that all fields
       *  in your class should be annotated with class-validator decorators; otherwise
       * the fields will be removed. The good news is that it ensures that you will never receive unexpected fields.
       * This is especially important to avoid injecting data silently
       */
      whitelist: true,

      /**
       * Instructs NestJS to throw an exception if there are unexpected fields.
       * This is stricter, but even clearer. At least the client will know if/when it provides invalid/unexpected data
       */
      forbidNonWhitelisted: true,

      /**
       * Unknown objects are immediately rejected
       */
      forbidUnknownValues: true,

      /**
       * Detailed error messages since this is 4xx
       */
      disableErrorMessages: false,

      /**
       * tells NestJS not to reflect the value at fault
       * in the error responses. This lightens the responses and might limit
       * sensitive data exposure in some cases
       */
      validationError: {
        /**
         * WARNING: Avoid exposing the values in the error output (could leak sensitive information)
         */
        value: false,
      },

      /**
       * Transform the JSON into a class instance when possible.
       * Depends on the type of the data on the controllers
       */
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
