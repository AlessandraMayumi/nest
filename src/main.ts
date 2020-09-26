import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './environment/swagger/swagger.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform:true }))
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  setupSwagger(app);
  
  await app.listen(3000);
}
bootstrap();
