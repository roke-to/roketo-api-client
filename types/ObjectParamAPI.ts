import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenDto } from '../models/AccessTokenDto';
import { ArchivedStream } from '../models/ArchivedStream';
import { BadRequest } from '../models/BadRequest';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Notification } from '../models/Notification';
import { Unauthorized } from '../models/Unauthorized';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';

import { ObservableArchivesStreamsApi } from "./ObservableAPI";
import { ArchivesStreamsApiRequestFactory, ArchivesStreamsApiResponseProcessor} from "../apis/ArchivesStreamsApi";

export interface ArchivesStreamsApiFindArchivedStreamsRequest {
}

export class ObjectArchivesStreamsApi {
    private api: ObservableArchivesStreamsApi

    public constructor(configuration: Configuration, requestFactory?: ArchivesStreamsApiRequestFactory, responseProcessor?: ArchivesStreamsApiResponseProcessor) {
        this.api = new ObservableArchivesStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public findArchivedStreams(param: ArchivesStreamsApiFindArchivedStreamsRequest = {}, options?: Configuration): Promise<Array<ArchivedStream>> {
        return this.api.findArchivedStreams( options).toPromise();
    }

}

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

import { ObservableNotificationsApi } from "./ObservableAPI";
import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";

export interface NotificationsApiFindAllRequest {
}

export interface NotificationsApiMarkAllReadRequest {
}

export interface NotificationsApiUnsubscribeRequest {
    /**
     * 
     * @type string
     * @memberof NotificationsApiunsubscribe
     */
    accountId: string
    /**
     * 
     * @type string
     * @memberof NotificationsApiunsubscribe
     */
    jwt: string
}

export class ObjectNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(configuration: Configuration, requestFactory?: NotificationsApiRequestFactory, responseProcessor?: NotificationsApiResponseProcessor) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public findAll(param: NotificationsApiFindAllRequest = {}, options?: Configuration): Promise<Array<Notification>> {
        return this.api.findAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public markAllRead(param: NotificationsApiMarkAllReadRequest = {}, options?: Configuration): Promise<void> {
        return this.api.markAllRead( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public unsubscribe(param: NotificationsApiUnsubscribeRequest, options?: Configuration): Promise<void> {
        return this.api.unsubscribe(param.accountId, param.jwt,  options).toPromise();
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

export interface UsersApiResendVerificationEmailRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiresendVerificationEmail
     */
    accountId: string
}

export interface UsersApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiupdate
     */
    accountId: string
    /**
     * 
     * @type UpdateUserDto
     * @memberof UsersApiupdate
     */
    updateUserDto: UpdateUserDto
}

export interface UsersApiVerifyEmailRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiverifyEmail
     */
    accountId: string
    /**
     * 
     * @type string
     * @memberof UsersApiverifyEmail
     */
    jwt: string
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
    public resendVerificationEmail(param: UsersApiResendVerificationEmailRequest, options?: Configuration): Promise<void> {
        return this.api.resendVerificationEmail(param.accountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: UsersApiUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.update(param.accountId, param.updateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public verifyEmail(param: UsersApiVerifyEmailRequest, options?: Configuration): Promise<void> {
        return this.api.verifyEmail(param.accountId, param.jwt,  options).toPromise();
    }

}
