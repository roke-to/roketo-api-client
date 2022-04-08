import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { UpsertUserDto } from '../models/UpsertUserDto';
import { User } from '../models/User';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    findOne(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getAvatarUrl(accountId: string, _options?: Configuration): Promise<RequestContext>;
    upsert(accountId: string, upsertUserDto: UpsertUserDto, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    findOne(response: ResponseContext): Promise<User>;
    getAvatarUrl(response: ResponseContext): Promise<void>;
    upsert(response: ResponseContext): Promise<User>;
}
