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
import { ObservableArchivesStreamsApi } from './ObservableAPI';

import { ArchivesStreamsApiRequestFactory, ArchivesStreamsApiResponseProcessor} from "../apis/ArchivesStreamsApi";
export class PromiseArchivesStreamsApi {
    private api: ObservableArchivesStreamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArchivesStreamsApiRequestFactory,
        responseProcessor?: ArchivesStreamsApiResponseProcessor
    ) {
        this.api = new ObservableArchivesStreamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public findArchivedStreams(_options?: Configuration): Promise<Array<ArchivedStream>> {
        const result = this.api.findArchivedStreams(_options);
        return result.toPromise();
    }


}



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
     */
    public markAllRead(_options?: Configuration): Promise<void> {
        const result = this.api.markAllRead(_options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     * @param jwt 
     */
    public unsubscribe(accountId: string, jwt: string, _options?: Configuration): Promise<void> {
        const result = this.api.unsubscribe(accountId, jwt, _options);
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
     */
    public resendVerificationEmail(accountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resendVerificationEmail(accountId, _options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     * @param updateUserDto 
     */
    public update(accountId: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<void> {
        const result = this.api.update(accountId, updateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param accountId 
     * @param jwt 
     */
    public verifyEmail(accountId: string, jwt: string, _options?: Configuration): Promise<void> {
        const result = this.api.verifyEmail(accountId, jwt, _options);
        return result.toPromise();
    }


}



