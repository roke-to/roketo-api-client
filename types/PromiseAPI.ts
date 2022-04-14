import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenDto } from '../models/AccessTokenDto';
import { BadRequest } from '../models/BadRequest';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Notification } from '../models/Notification';
import { ReadNotificationDto } from '../models/ReadNotificationDto';
import { Unauthorized } from '../models/Unauthorized';
import { UpsertUserDto } from '../models/UpsertUserDto';
import { User } from '../models/User';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param loginDto 
     */
    public login(loginDto: LoginDto, _options?: Configuration): Promise<AccessTokenDto> {
        const result = this.api.login(loginDto, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getHello(_options?: Configuration): Promise<HelloResponse> {
        const result = this.api.getHello(_options);
        return result.toPromise();
    }


}



import { ObservableNotificationsApi } from './ObservableAPI';

import { NotificationsApiRequestFactory, NotificationsApiResponseProcessor} from "../apis/NotificationsApi";
export class PromiseNotificationsApi {
    private api: ObservableNotificationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationsApiRequestFactory,
        responseProcessor?: NotificationsApiResponseProcessor
    ) {
        this.api = new ObservableNotificationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public findAll(_options?: Configuration): Promise<Array<Notification>> {
        const result = this.api.findAll(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param readNotificationDto 
     */
    public markRead(id: string, readNotificationDto: ReadNotificationDto, _options?: Configuration): Promise<Notification> {
        const result = this.api.markRead(id, readNotificationDto, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param accountId 
     */
    public findOne(accountId: string, _options?: Configuration): Promise<User> {
        const result = this.api.findOne(accountId, _options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     */
    public getAvatarUrl(accountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.getAvatarUrl(accountId, _options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     * @param upsertUserDto 
     */
    public upsert(accountId: string, upsertUserDto: UpsertUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.upsert(accountId, upsertUserDto, _options);
        return result.toPromise();
    }


}



