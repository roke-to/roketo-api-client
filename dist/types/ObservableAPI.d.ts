import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { ArchivedStream } from '../models/ArchivedStream';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Notification } from '../models/Notification';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { ArchivesStreamsApiRequestFactory, ArchivesStreamsApiResponseProcessor } from "../apis/ArchivesStreamsApi";
export declare class ObservableArchivesStreamsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ArchivesStreamsApiRequestFactory, responseProcessor?: ArchivesStreamsApiResponseProcessor);
    findArchivedStreams(_options?: Configuration): Observable<Array<ArchivedStream>>;
}
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
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export declare class ObservableNotificationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    findAll(_options?: Configuration): Observable<Array<Notification>>;
    markAllRead(_options?: Configuration): Observable<void>;
    unsubscribe(accountId: string, jwt: string, _options?: Configuration): Observable<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    findOne(accountId: string, _options?: Configuration): Observable<User>;
    getAvatarUrl(accountId: string, _options?: Configuration): Observable<void>;
    resendVerificationEmail(accountId: string, _options?: Configuration): Observable<void>;
    update(accountId: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<void>;
    verifyEmail(accountId: string, jwt: string, _options?: Configuration): Observable<void>;
}
