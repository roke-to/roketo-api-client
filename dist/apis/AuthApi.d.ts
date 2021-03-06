import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { LoginDto } from '../models/LoginDto';
export declare class AuthApiRequestFactory extends BaseAPIRequestFactory {
    login(loginDto: LoginDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthApiResponseProcessor {
    login(response: ResponseContext): Promise<AccessTokenDto>;
}
