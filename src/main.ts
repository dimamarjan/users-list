import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    const config = new DocumentBuilder()
        .setTitle('API')
        .setDescription('The users API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/v1/docs/', app, document);

    await app.listen(process.env.API_PORT || 8888);
    console.info(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
