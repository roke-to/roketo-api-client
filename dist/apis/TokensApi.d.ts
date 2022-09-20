import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class TokensApiRequestFactory extends BaseAPIRequestFactory {
    findAllTokens(_options?: Configuration): Promise<RequestContext>;
}
export declare class TokensApiResponseProcessor {
    findAllTokens(response: ResponseContext): Promise<Array<string>>;
}
