import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBABTKp2BVW6dbb9Wzl1nFvwQPpZChuC4BAZAXXrqxHMe8qaOYEIFofXJPCgQd9mxMMVeLtYcfeC3AZAKVtz1TQ3Bh8g54hXAOpBVfRph0WR0K68YPDuouZAdYZBfTwEnqjARH5iOGgOQoyk58leOAZBEhfKrFQedisnZCttLV5FHMWpxx7fH99LMetJOs5aFXAZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}