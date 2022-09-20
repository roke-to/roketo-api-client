# .NotificationsApi

All URIs are relative to *https://roketo-test-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllNotifications**](NotificationsApi.md#findAllNotifications) | **GET** /notifications | 
[**markAllRead**](NotificationsApi.md#markAllRead) | **POST** /notifications/readAll | 
[**unsubscribe**](NotificationsApi.md#unsubscribe) | **GET** /notifications/{accountId}/unsubscribe/{jwt} | 


# **findAllNotifications**
> Array<Notification> findAllNotifications()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:any = {};

apiInstance.findAllNotifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Notification>**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **markAllRead**
> void markAllRead()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:any = {};

apiInstance.markAllRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unsubscribe**
> void unsubscribe()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiUnsubscribeRequest = {
  // string
  accountId: "accountId_example",
  // string
  jwt: "jwt_example",
};

apiInstance.unsubscribe(body).then((data:any) => {
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

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


