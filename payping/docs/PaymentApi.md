# _.PaymentApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentBlockMoney**](PaymentApi.md#paymentBlockMoney) | **POST** /v1/pay/BlockMoney | ساخت پرداخت مسدود شده
[**paymentCancelPayment**](PaymentApi.md#paymentCancelPayment) | **DELETE** /v1/pay/{code} | برای لغو کردن یک کد پرداخت می توانید از این متد استفاده کنید
[**paymentCreateMultiPayment**](PaymentApi.md#paymentCreateMultiPayment) | **POST** /v1/pay/Multi | ساخت پرداخت تسهیمی
[**paymentCreatePayment**](PaymentApi.md#paymentCreatePayment) | **POST** /v1/pay | ساخت پرداخت
[**paymentUnBlockMoney**](PaymentApi.md#paymentUnBlockMoney) | **POST** /v1/pay/UnBlockMoney | آزاد سازی پول مسدود شده
[**paymentVerifyPayment**](PaymentApi.md#paymentVerifyPayment) | **POST** /v1/pay/verify | تایید پرداخت


<a name="paymentBlockMoney"></a>
# **paymentBlockMoney**
> PaymentResult paymentBlockMoney(opts)

ساخت پرداخت مسدود شده

به کمک این متد می توانید برای یک نفر پرداخت تضمینی ایجاد کنید.   

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

var apiInstance = new _.PaymentApi();

var opts = { 
  'model': new _.CreateMultiPaymentViewModel() // CreateMultiPaymentViewModel | مشخصات پرداخت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentBlockMoney(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreateMultiPaymentViewModel**](CreateMultiPaymentViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentCancelPayment"></a>
# **paymentCancelPayment**
> paymentCancelPayment(code)

برای لغو کردن یک کد پرداخت می توانید از این متد استفاده کنید

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

var apiInstance = new _.PaymentApi();

var code = "code_example"; // String | کد پرداخت


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentCancelPayment(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد پرداخت | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentCreateMultiPayment"></a>
# **paymentCreateMultiPayment**
> PaymentResult paymentCreateMultiPayment(opts)

ساخت پرداخت تسهیمی



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

var apiInstance = new _.PaymentApi();

var opts = { 
  'model': new _.CreateMultiPaymentViewModel() // CreateMultiPaymentViewModel | مشخصات پرداخت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentCreateMultiPayment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreateMultiPaymentViewModel**](CreateMultiPaymentViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentCreatePayment"></a>
# **paymentCreatePayment**
> PaymentResult paymentCreatePayment(opts)

ساخت پرداخت

به کمک این متد می توانید برای یک نفر کد پرداخت ایجاد کنید.   

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

var apiInstance = new _.PaymentApi();

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
apiInstance.paymentCreatePayment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CreatePaymentViewModel**](CreatePaymentViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentUnBlockMoney"></a>
# **paymentUnBlockMoney**
> PaymentResult paymentUnBlockMoney(opts)

آزاد سازی پول مسدود شده



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

var apiInstance = new _.PaymentApi();

var opts = { 
  'model': new _.UnBlockMoneyViewModel() // UnBlockMoneyViewModel | مشخصات پرداخت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentUnBlockMoney(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**UnBlockMoneyViewModel**](UnBlockMoneyViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentVerifyPayment"></a>
# **paymentVerifyPayment**
> paymentVerifyPayment(opts)

تایید پرداخت



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

var apiInstance = new _.PaymentApi();

var opts = { 
  'model': new _.VerifyPaymentViewModel() // VerifyPaymentViewModel | مشخصات پرداخت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentVerifyPayment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**VerifyPaymentViewModel**](VerifyPaymentViewModel.md)| مشخصات پرداخت | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

