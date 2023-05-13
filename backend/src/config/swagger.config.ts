import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Blog Backend API')
  .setDescription('API documentation for blog')
  .setVersion('1.0')
  .addTag('blog')
  .build();
