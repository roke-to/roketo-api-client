import { Configuration } from '../configuration';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export interface AuthApiLoginRequest {
    loginDto: LoginDto;
}
export declare class ObjectAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    login(param: AuthApiLoginRequest, options?: Configuration): Promise<AccessTokenDto>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiGetHelloRequest {
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getHello(param?: DefaultApiGetHelloRequest, options?: Configuration): Promise<HelloResponse>;
}
