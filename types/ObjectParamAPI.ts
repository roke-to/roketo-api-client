import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessToken } from '../models/AccessToken';
import { BadRequest } from '../models/BadRequest';
import { HelloResponse } from '../models/HelloResponse';
import { LoginDto } from '../models/LoginDto';
import { Unauthorized } from '../models/Unauthorized';

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
    public login(param: AuthApiLoginRequest, options?: Configuration): Promise<AccessToken> {
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
