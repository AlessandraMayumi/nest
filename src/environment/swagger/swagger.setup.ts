import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const setupSwagger = (nestApp: INestApplication): void => {
    const options = new DocumentBuilder()
    .setTitle('VNT Bootcamp TypeScript + NestJS')
    .setDescription('Description')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(nestApp, options)
    SwaggerModule.setup('Swagger', nestApp, document)
}