import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAGG3jm0nTkBAJKCx4CzZAUZCAJxdTz6FGpRWi6zew6LBdmCbC7AwLhY3UgnHcTKooMSHuyLil43xZBeBkMXqk6NoWZBfCZBmswwsoLXS21EsWonmEHgEeZCKj63VZCe96xBwlm1Auwx3vrqrlfvlit7PEWbWErA5MOPNMSDLvTMjilUBeEWZBoElzzVJyC1aPBZCAWTvZB0F3RAZDZD',
                'Content-Type': 'application/json'
            }
        }
    }
}