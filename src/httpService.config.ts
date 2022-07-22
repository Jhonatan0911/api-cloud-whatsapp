import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBACdbAlJCnJSc7aArUmJPfZBj6umBfvbZCexgOKktmmUXoZBsG4G0Ioj79awChruWZAP9Je42btfo29oTDaLl4zSjgbGpqwnJ2onIITUWmppipN44yjPpTQUQBxvaibmJZC9Bi0i9z9gh2BnWDX80SC229j6ie5ybkHbkZAnZCwGtHgzzjW8aXiPZCRs0Qf8tLAZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}