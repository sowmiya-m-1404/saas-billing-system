import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('SaaS Billing API')
    .setDescription(
      'Multi-Tenant SaaS Billing & Subscription Engine API Documentation',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ?? 3000;

  await app.listen(port);

  console.log(`🚀 Server Running: http://localhost:${port}`);
  console.log(`📚 Swagger Docs: http://localhost:${port}/api`);
}

bootstrap();