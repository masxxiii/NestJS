import { DocumentBuilder } from '@nestjs/swagger';
import { SCHEMES } from '../utils';

export default new DocumentBuilder()
    .setTitle('Backend Service')
    .setDescription('Power your applications with custom backend service APIs')
    .setVersion('1.0')
    .setLicense('MIT License', 'https://en.wikipedia.org/wiki/MIT_License')
    .setTermsOfService('https://en.wikipedia.org/wiki/Terms_of_service')
    .setContact('Test Name', 'https://test.com', 'hello@test.com')
    .addBearerAuth(
        {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'Authorization',
            description: 'Enter access_token received after login',
            in: 'header',
        },
        SCHEMES.BEARER,
    )
    .build();
