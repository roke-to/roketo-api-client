import { Configuration } from '../configuration';
import { AccessTokenDto } from '../models/AccessTokenDto';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { UpsertUserDto } from '../models/UpsertUserDto';
import { User } from '../models/User';
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
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class PromiseUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    findOne(accountId: string, _options?: Configuration): Promise<User>;
    getAvatarUrl(accountId: string, _options?: Configuration): Promise<void>;
    upsert(accountId: string, upsertUserDto: UpsertUserDto, _options?: Configuration): Promise<User>;
}
