import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Notification } from '../models/Notification';
import { ReadNotificationDto } from '../models/ReadNotificationDto';
export declare class NotificationsApiRequestFactory extends BaseAPIRequestFactory {
    findAll(_options?: Configuration): Promise<RequestContext>;
    markRead(id: string, readNotificationDto: ReadNotificationDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class NotificationsApiResponseProcessor {
    findAll(response: ResponseContext): Promise<Array<Notification>>;
    markRead(response: ResponseContext): Promise<Notification>;
}
