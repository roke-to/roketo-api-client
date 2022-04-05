import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessToken } from '../models/AccessToken';
import { BadRequest } from '../models/BadRequest';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Unauthorized } from '../models/Unauthorized';
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
    public login(loginDto: LoginDto, _options?: Configuration): Promise<AccessToken> {
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



