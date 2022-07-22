import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBAEl0VhZAr3aNXVApLySjoyuepZBpLZC94LFfx6ZAIrzTxUqZCn4Ihs2EzhtAHHLfj2GDoRVGZC9ZC8imMbIZCotmZA83RZBAdo2BcZAP7ny4GXkKWWUe7fZCg0gd7ZBPlZCbmXPcaExXFdsN9Dlog1ZBTYkI8OkTtmEip7N3M0DFQ9hbXJuk6E16V3iL3F8dGOMkSaM0QZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}