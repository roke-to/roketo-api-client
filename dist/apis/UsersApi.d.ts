import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    findOne(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getAvatarUrl(accountId: string, _options?: Configuration): Promise<RequestContext>;
    resendVerificationEmail(accountId: string, _options?: Configuration): Promise<RequestContext>;
    update(accountId: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<RequestContext>;
    verifyEmail(accountId: string, jwt: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    findOne(response: ResponseContext): Promise<User>;
    getAvatarUrl(response: ResponseContext): Promise<void>;
    resendVerificationEmail(response: ResponseContext): Promise<void>;
    update(response: ResponseContext): Promise<void>;
    verifyEmail(response: ResponseContext): Promise<void>;
}
