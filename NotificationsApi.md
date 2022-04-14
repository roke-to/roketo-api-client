# .NotificationsApi

All URIs are relative to *https://roketo-test-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll**](NotificationsApi.md#findAll) | **GET** /notifications | 
[**markRead**](NotificationsApi.md#markRead) | **PATCH** /notifications/{id} | 


# **findAll**
> Array<Notification> findAll()


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:any = {};

apiInstance.findAll(body).then((data:any) => {
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

# **markRead**
> Notification markRead(readNotificationDto)


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiMarkReadRequest = {
  // string
  id: "id_example",
  // ReadNotificationDto
  readNotificationDto: {
    isRead: true,
  },
};

apiInstance.markRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readNotificationDto** | **ReadNotificationDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**Notification**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


