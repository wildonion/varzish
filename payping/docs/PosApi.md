# _.PosApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posCreatePayment**](PosApi.md#posCreatePayment) | **POST** /v1/pos | ساخت پرداخت شناسه دار


<a name="posCreatePayment"></a>
# **posCreatePayment**
> IPosPayResult posCreatePayment(opts)

ساخت پرداخت شناسه دار

از این متد می تواند برای ساخت یک پرادخت شناسه دار که به کمک دستگاه Pos پرداخت آن انجام می شود، استفاده کرد

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

var apiInstance = new _.PosApi();

var opts = { 
  'model': new _.CreatePaymentViewModel() // CreatePaymentViewModel | مشخصات پرداخت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.posCreatePayment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreatePaymentViewModel**](CreatePaymentViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

[**IPosPayResult**](IPosPayResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

