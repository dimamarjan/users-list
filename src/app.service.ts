import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return '<a href="http://localhost:3030/api/v1/docs/" style="font-size: 24px; text-decoration: none;"> >> go to API documentation to test this app <<</a>';
    }
}
