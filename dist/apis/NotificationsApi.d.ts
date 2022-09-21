import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Notification } from '../models/Notification';
export declare class NotificationsApiRequestFactory extends BaseAPIRequestFactory {
    findAll(_options?: Configuration): Promise<RequestContext>;
    markAllRead(_options?: Configuration): Promise<RequestContext>;
    unsubscribe(accountId: string, jwt: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class NotificationsApiResponseProcessor {
    findAll(response: ResponseContext): Promise<Array<Notification>>;
    markAllRead(response: ResponseContext): Promise<void>;
    unsubscribe(response: ResponseContext): Promise<void>;
}
