# _.CouponApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**couponCreate**](CouponApi.md#couponCreate) | **POST** /v1/coupon | ساخت یک کد تخفیف جدید
[**couponDelete**](CouponApi.md#couponDelete) | **DELETE** /v1/coupon/{code} | حذف یک کد تخفیف
[**couponEdit**](CouponApi.md#couponEdit) | **PUT** /v1/coupon | بروزرسانی کد تخفیف
[**couponGet**](CouponApi.md#couponGet) | **GET** /v1/coupon/{code} | نمایش یک کد تخفیف
[**couponGetBuyersUseCoupon**](CouponApi.md#couponGetBuyersUseCoupon) | **GET** /v1/coupon/{couponCode}/BuyersList | دریافت لیست پرداخت‌های انجام شده یک کد تخفیف
[**couponGetBuyersUseCouponCount**](CouponApi.md#couponGetBuyersUseCouponCount) | **GET** /v1/coupon/{couponCode}/BuyersListCount | دریافت تعداد خرید‌های یک کد تخفیف
[**couponGetList**](CouponApi.md#couponGetList) | **GET** /v1/coupon/List | نمایش لیست کدهای تخفیف
[**couponGetListCount**](CouponApi.md#couponGetListCount) | **GET** /v1/coupon/ListCount | دریافت تعداد کدهای تخفیف


<a name="couponCreate"></a>
# **couponCreate**
> CodeVM couponCreate(opts)

ساخت یک کد تخفیف جدید

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

var apiInstance = new _.CouponApi();

var opts = { 
  'model': new _.CouponCreateViewModel() // CouponCreateViewModel | مشخصات کد تخفیف
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CouponCreateViewModel**](CouponCreateViewModel.md)| مشخصات کد تخفیف | [optional] 

### Return type

[**CodeVM**](CodeVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="couponDelete"></a>
# **couponDelete**
> couponDelete(code)

حذف یک کد تخفیف

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

var apiInstance = new _.CouponApi();

var code = "code_example"; // String | شناسه کد تخفیف


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.couponDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| شناسه کد تخفیف | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="couponEdit"></a>
# **couponEdit**
> couponEdit(opts)

بروزرسانی کد تخفیف

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

var apiInstance = new _.CouponApi();

var opts = { 
  'model': new _.CouponEditViewModel() // CouponEditViewModel | مشخصات کد تخفیف
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.couponEdit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**CouponEditViewModel**](CouponEditViewModel.md)| مشخصات کد تخفیف | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="couponGet"></a>
# **couponGet**
> CouponDetailViewModel couponGet(code)

نمایش یک کد تخفیف

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

var apiInstance = new _.CouponApi();

var code = "code_example"; // String | شناسه کد تخفیف


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| شناسه کد تخفیف | 

### Return type

[**CouponDetailViewModel**](CouponDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="couponGetBuyersUseCoupon"></a>
# **couponGetBuyersUseCoupon**
> [BuyerDetailsViewModel] couponGetBuyersUseCoupon(couponCode, opts)

دریافت لیست پرداخت‌های انجام شده یک کد تخفیف

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

var apiInstance = new _.CouponApi();

var couponCode = "couponCode_example"; // String | شناسه کد تخفیف

var opts = { 
  'offset': 0, // Number | شماره ابتدا لیست
  'limit': 10 // Number | شماره انتها لیست
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponGetBuyersUseCoupon(couponCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponCode** | **String**| شناسه کد تخفیف | 
 **offset** | **Number**| شماره ابتدا لیست | [optional] [default to 0]
 **limit** | **Number**| شماره انتها لیست | [optional] [default to 10]

### Return type

[**[BuyerDetailsViewModel]**](BuyerDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="couponGetBuyersUseCouponCount"></a>
# **couponGetBuyersUseCouponCount**
> CountVM couponGetBuyersUseCouponCount(couponCode)

دریافت تعداد خرید‌های یک کد تخفیف

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

var apiInstance = new _.CouponApi();

var couponCode = "couponCode_example"; // String | شناسه کد تخفیف


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponGetBuyersUseCouponCount(couponCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponCode** | **String**| شناسه کد تخفیف | 

### Return type

[**CountVM**](CountVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="couponGetList"></a>
# **couponGetList**
> [CouponListItemViewModel] couponGetList(opts)

نمایش لیست کدهای تخفیف

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

var apiInstance = new _.CouponApi();

var opts = { 
  'offset': 0, // Number | شماره ابتدا لیست
  'limit': 10, // Number | شماره انتها لیست
  'witharchived': false, // Boolean | اضافه شدن کدهای تخفیف‌ آرشیو شده
  'search': "search_example", // String | کیلدواژه جستجو در کدهای تخفیف
  'productcode': "productcode_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponGetList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شماره ابتدا لیست | [optional] [default to 0]
 **limit** | **Number**| شماره انتها لیست | [optional] [default to 10]
 **witharchived** | **Boolean**| اضافه شدن کدهای تخفیف‌ آرشیو شده | [optional] [default to false]
 **search** | **String**| کیلدواژه جستجو در کدهای تخفیف | [optional] 
 **productcode** | **String**|  | [optional] 

### Return type

[**[CouponListItemViewModel]**](CouponListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="couponGetListCount"></a>
# **couponGetListCount**
> CountVM couponGetListCount(opts)

دریافت تعداد کدهای تخفیف

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

var apiInstance = new _.CouponApi();

var opts = { 
  'witharchived': false, // Boolean | 
  'search': "search_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.couponGetListCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **witharchived** | **Boolean**|  | [optional] [default to false]
 **search** | **String**|  | [optional] 

### Return type

[**CountVM**](CountVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

