import { Configuration } from '../configuration';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { UpsertUserDto } from '../models/UpsertUserDto';
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
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiFindOneRequest {
    accountId: string;
}
export interface UsersApiUpsertRequest {
    accountId: string;
    upsertUserDto: UpsertUserDto;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    findOne(param: UsersApiFindOneRequest, options?: Configuration): Promise<User>;
    upsert(param: UsersApiUpsertRequest, options?: Configuration): Promise<User>;
}
