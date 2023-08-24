import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchAllErrosExceptionFilter } from './exeptions-filters/catch-all-exception-filter';
import { PrismaExceptionFilter } from './exeptions-filters/prisma.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {httpAdapter} = app.get(HttpAdapterHost); // didnt need it yet *check JSON issue*

  app.useGlobalFilters(
    // Catch exceptions by order
    new CatchAllErrosExceptionFilter(httpAdapter), 
    new PrismaExceptionFilter()
  );

  await app.listen(3000);
}
bootstrap();
