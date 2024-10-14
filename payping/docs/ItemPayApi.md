# _.ItemPayApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemPayCheckCoupon**](ItemPayApi.md#itemPayCheckCoupon) | **POST** /v1/ItemPay/CheckCoupon | چک کردن وضعیت یک کد تخفیف برای پرداخت
[**itemPayGet**](ItemPayApi.md#itemPayGet) | **GET** /v1/ItemPay/{code} | دریافت مشخصات پرداخت آیتم‌مالی به همراه لینک‌ثابت
[**itemPayPost**](ItemPayApi.md#itemPayPost) | **POST** /v1/ItemPay | ارسال مشخصات پرداخت آیتم‌مالی برای پرداخت
[**itemPayVerifyPermanentLink**](ItemPayApi.md#itemPayVerifyPermanentLink) | **POST** /v1/ItemPay/VerifyPermaLink | تایید پرداخت لینک‌ثابت یک آیتم‌مالی


<a name="itemPayCheckCoupon"></a>
# **itemPayCheckCoupon**
> CouponResultVM itemPayCheckCoupon(opts)

چک کردن وضعیت یک کد تخفیف برای پرداخت

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

var apiInstance = new _.ItemPayApi();

var opts = { 
  'model': new _.CouponViewModel() // CouponViewModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemPayCheckCoupon(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CouponViewModel**](CouponViewModel.md)|  | [optional] 

### Return type

[**CouponResultVM**](CouponResultVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemPayGet"></a>
# **itemPayGet**
> PayGetViewModel itemPayGet(code)

دریافت مشخصات پرداخت آیتم‌مالی به همراه لینک‌ثابت

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

var apiInstance = new _.ItemPayApi();

var code = "code_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemPayGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**PayGetViewModel**](PayGetViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemPayPost"></a>
# **itemPayPost**
> itemPayPost(opts)

ارسال مشخصات پرداخت آیتم‌مالی برای پرداخت

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

var apiInstance = new _.ItemPayApi();

var opts = { 
  'model': new _.PermanentPaymentViewModel() // PermanentPaymentViewModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.itemPayPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**PermanentPaymentViewModel**](PermanentPaymentViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="itemPayVerifyPermanentLink"></a>
# **itemPayVerifyPermanentLink**
> PayReportViewModel itemPayVerifyPermanentLink(opts)

تایید پرداخت لینک‌ثابت یک آیتم‌مالی

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

var apiInstance = new _.ItemPayApi();

var opts = { 
  'verfyPermaVM': new _.VerfyPermaVM() // VerfyPermaVM | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemPayVerifyPermanentLink(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verfyPermaVM** | [**VerfyPermaVM**](VerfyPermaVM.md)|  | [optional] 

### Return type

[**PayReportViewModel**](PayReportViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

