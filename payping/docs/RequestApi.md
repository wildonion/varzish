# _.RequestApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestCancelRequest**](RequestApi.md#requestCancelRequest) | **DELETE** /v1/request/{code} | لغو درخواست پول
[**requestCreateMultiRequest**](RequestApi.md#requestCreateMultiRequest) | **POST** /v1/request/Multi | ارسال درخواست پول برای چند نفر
[**requestCreateRequest**](RequestApi.md#requestCreateRequest) | **POST** /v1/request | ارسال درخواست پول
[**requestSendReminder**](RequestApi.md#requestSendReminder) | **POST** /v1/request/{code}/SendReminder | یادآوری مجدد درخواست پول


<a name="requestCancelRequest"></a>
# **requestCancelRequest**
> requestCancelRequest(code)

لغو درخواست پول

برای لغو کردن یک کد درخواست می توانید از این متد استفاده کنید

### Example
```javascript
var _ = require('___');
var defaultClient = _.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new _.RequestApi();

var code = "code_example"; // String | کد درخواست


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestCancelRequest(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد درخواست | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="requestCreateMultiRequest"></a>
# **requestCreateMultiRequest**
> [MultiRequestViewModel] requestCreateMultiRequest(opts)

ارسال درخواست پول برای چند نفر

از این متد برای ارسال لینک درخواست پول برای چند نفر بصورت  پیامک یا ایمیل استفاده می شود

### Example
```javascript
var _ = require('___');
var defaultClient = _.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new _.RequestApi();

var opts = { 
  'model': new _.CreateMultiRequestViewModel() // CreateMultiRequestViewModel | مشخصات درخواست گنندگان پول
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestCreateMultiRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreateMultiRequestViewModel**](CreateMultiRequestViewModel.md)| مشخصات درخواست گنندگان پول | [optional] 

### Return type

[**[MultiRequestViewModel]**](MultiRequestViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestCreateRequest"></a>
# **requestCreateRequest**
> RequestResult requestCreateRequest(opts)

ارسال درخواست پول

از این متد برای ارسال لینک درخواست پول برای یک نفر بصورت  پیامک یا ایمیل استفاده می شود

### Example
```javascript
var _ = require('___');
var defaultClient = _.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new _.RequestApi();

var opts = { 
  'model': new _.CreateRequestViewModel() // CreateRequestViewModel | مشخصات درخواست پول
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestCreateRequest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreateRequestViewModel**](CreateRequestViewModel.md)| مشخصات درخواست پول | [optional] 

### Return type

[**RequestResult**](RequestResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestSendReminder"></a>
# **requestSendReminder**
> requestSendReminder(code)

یادآوری مجدد درخواست پول

از این متد برای ارسال مجدد پیامک یا ایمیل لینک درخواست پول استفاده می شود

### Example
```javascript
var _ = require('___');
var defaultClient = _.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new _.RequestApi();

var code = "code_example"; // String | کد درخواست


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestSendReminder(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد درخواست | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

