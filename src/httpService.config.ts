import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBACNqCQBCESYVlwnwTpXOL3S5TyKZCCIW40FFKz1ubXHu5p6j4wOIheZCRI2FRZCfDgIGBZAmdZBPjbyKGKm6eIkqHlaGwNHbZBbiTCoKC6rNVoHAHmSOpOhfnzHWec2d9ZCeFZCZBUKBhWxan6EP2UDrugRzsTtyzzkkk8UI09JR5lZCfS74PAODWWy5w3ZAmzd5QZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}