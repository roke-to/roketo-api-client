# .AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /auth/login | 


# **login**
> AccessToken login(loginDto)


### Example


```typescript
import {  } from '@roketo/client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiLoginRequest = {
  // LoginDto
  loginDto: {
    accountId: "accountId_example",
    message: "ROKETO-LOGIN-1649011158748",
    signature: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDto** | **LoginDto**|  |


### Return type

**AccessToken**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Issues JWT for accessing all the other endpoints |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


