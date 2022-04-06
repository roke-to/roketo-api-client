# .UsersApi

All URIs are relative to *https://roketo-test-api.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findOne**](UsersApi.md#findOne) | **GET** /users/{accountId} | 
[**upsert**](UsersApi.md#upsert) | **PATCH** /users/{accountId} | 


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

# **upsert**
> User upsert(upsertUserDto)


### Example


```typescript
import {  } from '@roketo/api-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUpsertRequest = {
  // string
  accountId: "accountId_example",
  // UpsertUserDto
  upsertUserDto: {
    name: "name_example",
    email: "email_example",
  },
};

apiInstance.upsert(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertUserDto** | **UpsertUserDto**|  |
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


