# .UsersApi

All URIs are relative to *https://roketo-test-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findOne**](UsersApi.md#findOne) | **GET** /users/{accountId} | 
[**getAvatarUrl**](UsersApi.md#getAvatarUrl) | **GET** /users/{accountId}/avatar | 
[**resendVerificationEmail**](UsersApi.md#resendVerificationEmail) | **POST** /users/{accountId}/verifyEmail | 
[**update**](UsersApi.md#update) | **PATCH** /users/{accountId} | 
[**verifyEmail**](UsersApi.md#verifyEmail) | **GET** /users/{accountId}/verifyEmail/{jwt} | 


# **findOne**
> User findOne()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiFindOneRequest = {
  // string
  accountId: "accountId_example",
};

apiInstance.findOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAvatarUrl**
> void getAvatarUrl()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiGetAvatarUrlRequest = {
  // string
  accountId: "accountId_example",
};

apiInstance.getAvatarUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resendVerificationEmail**
> void resendVerificationEmail()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiResendVerificationEmailRequest = {
  // string
  accountId: "accountId_example",
};

apiInstance.resendVerificationEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> void update(updateUserDto)


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpdateRequest = {
  // string
  accountId: "accountId_example",
  // UpdateUserDto
  updateUserDto: {
    name: "name_example",
    email: "email_example",
    allowNotifications: true,
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserDto** | **UpdateUserDto**|  |
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyEmail**
> void verifyEmail()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiVerifyEmailRequest = {
  // string
  accountId: "accountId_example",
  // string
  jwt: "jwt_example",
};

apiInstance.verifyEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | defaults to undefined
 **jwt** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


