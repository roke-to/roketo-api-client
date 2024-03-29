import { Configuration } from '../configuration';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { ArchivedStream } from '../models/ArchivedStream';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Notification } from '../models/Notification';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { ArchivesStreamsApiRequestFactory, ArchivesStreamsApiResponseProcessor } from "../apis/ArchivesStreamsApi";
export declare class PromiseArchivesStreamsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ArchivesStreamsApiRequestFactory, responseProcessor?: ArchivesStreamsApiResponseProcessor);
    findArchivedStreams(_options?: Configuration): Promise<Array<ArchivedStream>>;
}
import { AuthApiRequestFactory, AuthApiResponseProcessor } from "../apis/AuthApi";
export declare class PromiseAuthApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor);
    login(loginDto: LoginDto, _options?: Configuration): Promise<AccessTokenDto>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getHello(_options?: Configuration): Promise<HelloResponse>;
}
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export declare class PromiseNotificationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    findAll(_options?: Configuration): Promise<Array<Notification>>;
    markAllRead(_options?: Configuration): Promise<void>;
    unsubscribe(accountId: string, jwt: string, _options?: Configuration): Promise<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    findOne(accountId: string, _options?: Configuration): Promise<User>;
    getAvatarUrl(accountId: string, _options?: Configuration): Promise<void>;
    resendVerificationEmail(accountId: string, _options?: Configuration): Promise<void>;
    update(accountId: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<void>;
    verifyEmail(accountId: string, jwt: string, _options?: Configuration): Promise<void>;
}
