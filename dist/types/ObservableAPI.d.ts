import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class ObservableAuthApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    login(loginDto: LoginDto, _options?: Configuration): Observable<AccessTokenDto>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getHello(_options?: Configuration): Observable<HelloResponse>;
}
