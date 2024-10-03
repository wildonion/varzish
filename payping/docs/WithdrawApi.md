# _.WithdrawApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withdrawCreate**](WithdrawApi.md#withdrawCreate) | **POST** /v1/withdraw/{amount} | درخواست تسویه حساب
[**withdrawDetails**](WithdrawApi.md#withdrawDetails) | **GET** /v1/withdrawdetails/{code} | نمایش جزئیات درخواست تسویه


<a name="withdrawCreate"></a>
# **withdrawCreate**
> WithdrawResult withdrawCreate(amount)

درخواست تسویه حساب

به کمک این متد می توانید یک درخواست تسویه با مبلغ دلخواه ایجاد نمایید

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

var apiInstance = new _.WithdrawApi();

var amount = 56; // Number | مبلغ تسویه حساب


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.withdrawCreate(amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **Number**| مبلغ تسویه حساب | 

### Return type

[**WithdrawResult**](WithdrawResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="withdrawDetails"></a>
# **withdrawDetails**
> WithdrawDetailsViewModel withdrawDetails(code)

نمایش جزئیات درخواست تسویه

از این متد برای نمایش لیست تسویه ها

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

var apiInstance = new _.WithdrawApi();

var code = "code_example"; // String | کد درخواست تسویه


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.withdrawDetails(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد درخواست تسویه | 

### Return type

[**WithdrawDetailsViewModel**](WithdrawDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

