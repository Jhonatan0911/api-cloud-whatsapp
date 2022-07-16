import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBAEQ11pKAZA3UGQRJ9ONJoeo15kGiTHXsLUkaGQJsZB5gTDqNoG54p0dXp5ZCaxYcliEXomGyE8AQuwE5js2O1K1u6vlxJcISROSUfWcZCnKKgxSO7T18hMVx4tF7TUF5FukbrOsE2WyZAxfbkF8GJrlboPnMjI3hSvleIQBtQnvOuZCOISHAwMz7vBIoP70QZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}