import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { HelloResponse } from '../models/HelloResponse';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    getHello(_options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    getHello(response: ResponseContext): Promise<HelloResponse>;
}
