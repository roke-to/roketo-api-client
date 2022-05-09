import { Configuration } from '../configuration';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Notification } from '../models/Notification';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
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
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor } from "../apis/NotificationsApi";
export interface NotificationsApiFindAllRequest {
}
export interface NotificationsApiMarkAllReadRequest {
}
export declare class ObjectNotificationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor);
    findAll(param?: NotificationsApiFindAllRequest, options?: Configuration): Promise<Array<Notification>>;
    markAllRead(param?: NotificationsApiMarkAllReadRequest, options?: Configuration): Promise<void>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiFindOneRequest {
    accountId: string;
}
export interface UsersApiGetAvatarUrlRequest {
    accountId: string;
}
export interface UsersApiUpdateRequest {
    accountId: string;
    updateUserDto: UpdateUserDto;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    findOne(param: UsersApiFindOneRequest, options?: Configuration): Promise<User>;
    getAvatarUrl(param: UsersApiGetAvatarUrlRequest, options?: Configuration): Promise<void>;
    update(param: UsersApiUpdateRequest, options?: Configuration): Promise<void>;
}
