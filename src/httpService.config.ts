import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBABQAyl5nqOXXNSn8OY3QH5UnR368nPYCyt71Kz7MZAsHz3lgRQMX9PfcdG4fZAN19qDw5A2pGHZBi2WOUzxo2LTJd5UZCYrfPE9h3k7NZAqVqcF73ZAAhBIwxFh4Ly2ymEyZCVKcfLqPqikEztTST3ma1m2eLSHZCJ5cWdK0TDZAV',
                'Content-Type': 'application/json'
            }
        }
    }
}