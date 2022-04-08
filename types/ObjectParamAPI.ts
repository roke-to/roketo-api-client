import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenDto } from '../models/AccessTokenDto';
import { BadRequest } from '../models/BadRequest';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Unauthorized } from '../models/Unauthorized';
import { UpsertUserDto } from '../models/UpsertUserDto';
import { User } from '../models/User';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiLoginRequest {
    /**
     * 
     * @type LoginDto
     * @memberof AuthApilogin
     */
    loginDto: LoginDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public login(param: AuthApiLoginRequest, options?: Configuration): Promise<AccessTokenDto> {
        return this.api.login(param.loginDto,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetHelloRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getHello(param: DefaultApiGetHelloRequest = {}, options?: Configuration): Promise<HelloResponse> {
        return this.api.getHello( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiFindOneRequest {
    /**
     * 
     * @type string
     * @memberof UsersApifindOne
     */
    accountId: string
}

export interface UsersApiGetAvatarUrlRequest {
    /**
     * 
     * @type string
     * @memberof UsersApigetAvatarUrl
     */
    accountId: string
}

export interface UsersApiUpsertRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiupsert
     */
    accountId: string
    /**
     * 
     * @type UpsertUserDto
     * @memberof UsersApiupsert
     */
    upsertUserDto: UpsertUserDto
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public findOne(param: UsersApiFindOneRequest, options?: Configuration): Promise<User> {
        return this.api.findOne(param.accountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAvatarUrl(param: UsersApiGetAvatarUrlRequest, options?: Configuration): Promise<void> {
        return this.api.getAvatarUrl(param.accountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public upsert(param: UsersApiUpsertRequest, options?: Configuration): Promise<User> {
        return this.api.upsert(param.accountId, param.upsertUserDto,  options).toPromise();
    }

}
