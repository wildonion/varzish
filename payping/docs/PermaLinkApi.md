# _.PermaLinkApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permaLinkCreate**](PermaLinkApi.md#permaLinkCreate) | **POST** /v1/permaLink | ساخت یک لینک ثابت جدید
[**permaLinkDelete**](PermaLinkApi.md#permaLinkDelete) | **DELETE** /v1/permaLink/{code} | حذف یک لینک ثابت
[**permaLinkEdit**](PermaLinkApi.md#permaLinkEdit) | **PUT** /v1/permaLink | بروزرسانی لینک ثابت
[**permaLinkGet**](PermaLinkApi.md#permaLinkGet) | **GET** /v1/permaLink/{code} | نمایش یک لینک ثابت
[**permaLinkGetBuyerDetailByPaymentCode**](PermaLinkApi.md#permaLinkGetBuyerDetailByPaymentCode) | **GET** /v1/permaLink/{payCode}/Buyer | دریافت جزئیات پرداخت یک لینک‌ثابت
[**permaLinkGetList**](PermaLinkApi.md#permaLinkGetList) | **GET** /v1/permaLink/List | نمایش لیست لینک‌های ثابت
[**permaLinkGetListCount**](PermaLinkApi.md#permaLinkGetListCount) | **GET** /v1/permaLink/ListCount | دریافت تعداد لینک‌های ثابت
[**permaLinkGetPermanentBuyersCountByCode**](PermaLinkApi.md#permaLinkGetPermanentBuyersCountByCode) | **GET** /v1/permaLink/{productCode}/BuyersListCount | دریافت تعداد پرداختی‌های یک لینک‌ثابت
[**permaLinkGetPermanentBuyersPaging**](PermaLinkApi.md#permaLinkGetPermanentBuyersPaging) | **GET** /v1/permaLink/{productCode}/BuyersList | دریافت لیست پرداخت‌های انجام شده یک لینک‌ثابت


<a name="permaLinkCreate"></a>
# **permaLinkCreate**
> CodeVM permaLinkCreate(opts)

ساخت یک لینک ثابت جدید

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

var apiInstance = new _.PermaLinkApi();

var opts = { 
  'model': new _.PermanentCreateViewModel() // PermanentCreateViewModel | مشخصات لینک ثابت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permaLinkCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**PermanentCreateViewModel**](PermanentCreateViewModel.md)| مشخصات لینک ثابت | [optional] 

### Return type

[**CodeVM**](CodeVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permaLinkDelete"></a>
# **permaLinkDelete**
> permaLinkDelete(code)

حذف یک لینک ثابت

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

var apiInstance = new _.PermaLinkApi();

var code = "code_example"; // String | شناسه لینک ثابت


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.permaLinkDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| شناسه لینک ثابت | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="permaLinkEdit"></a>
# **permaLinkEdit**
> permaLinkEdit(opts)

بروزرسانی لینک ثابت

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

var apiInstance = new _.PermaLinkApi();

var opts = { 
  'model': new _.PermanentEditViewModel() // PermanentEditViewModel | مشخصات لینک ثابت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.permaLinkEdit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**PermanentEditViewModel**](PermanentEditViewModel.md)| مشخصات لینک ثابت | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permaLinkGet"></a>
# **permaLinkGet**
> PermanentDetailViewModel permaLinkGet(code)

نمایش یک لینک ثابت

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

var apiInstance = new _.PermaLinkApi();

var code = "code_example"; // String | شناسه لینک ثابت


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permaLinkGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| شناسه لینک ثابت | 

### Return type

[**PermanentDetailViewModel**](PermanentDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="permaLinkGetBuyerDetailByPaymentCode"></a>
# **permaLinkGetBuyerDetailByPaymentCode**
> BuyerDetailsViewModel permaLinkGetBuyerDetailByPaymentCode(payCode)

دریافت جزئیات پرداخت یک لینک‌ثابت

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

var apiInstance = new _.PermaLinkApi();

var payCode = "payCode_example"; // String | کد پرداخت


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permaLinkGetBuyerDetailByPaymentCode(payCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payCode** | **String**| کد پرداخت | 

### Return type

[**BuyerDetailsViewModel**](BuyerDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="permaLinkGetList"></a>
# **permaLinkGetList**
> [PermanentListItemViewModel] permaLinkGetList(opts)

نمایش لیست لینک‌های ثابت

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

var apiInstance = new _.PermaLinkApi();

var opts = { 
  'offset': 0, // Number | شماره ابتدا لیست
  'limit': 10, // Number | شماره انتها لیست
  'witharchived': false, // Boolean | اضافه شدن لینک‌های ثابت‌ آرشیو شده
  'search': "search_example" // String | کیلدواژه جستجو در لینک‌های ثابت
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permaLinkGetList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شماره ابتدا لیست | [optional] [default to 0]
 **limit** | **Number**| شماره انتها لیست | [optional] [default to 10]
 **witharchived** | **Boolean**| اضافه شدن لینک‌های ثابت‌ آرشیو شده | [optional] [default to false]
 **search** | **String**| کیلدواژه جستجو در لینک‌های ثابت | [optional] 

### Return type

[**[PermanentListItemViewModel]**](PermanentListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="permaLinkGetListCount"></a>
# **permaLinkGetListCount**
> CountVM permaLinkGetListCount(opts)

دریافت تعداد لینک‌های ثابت

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

var apiInstance = new _.PermaLinkApi();

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
apiInstance.permaLinkGetListCount(opts, callback);
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

<a name="permaLinkGetPermanentBuyersCountByCode"></a>
# **permaLinkGetPermanentBuyersCountByCode**
> CountVM permaLinkGetPermanentBuyersCountByCode(productCode)

دریافت تعداد پرداختی‌های یک لینک‌ثابت

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

var apiInstance = new _.PermaLinkApi();

var productCode = "productCode_example"; // String | کد آیتم‌مالی


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permaLinkGetPermanentBuyersCountByCode(productCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| کد آیتم‌مالی | 

### Return type

[**CountVM**](CountVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="permaLinkGetPermanentBuyersPaging"></a>
# **permaLinkGetPermanentBuyersPaging**
> [ProductBuyerViewModel] permaLinkGetPermanentBuyersPaging(productCode, opts)

دریافت لیست پرداخت‌های انجام شده یک لینک‌ثابت

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

var apiInstance = new _.PermaLinkApi();

var productCode = "productCode_example"; // String | کد آیتم‌مالی

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
apiInstance.permaLinkGetPermanentBuyersPaging(productCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| کد آیتم‌مالی | 
 **offset** | **Number**| شماره ابتدا لیست | [optional] [default to 0]
 **limit** | **Number**| شماره انتها لیست | [optional] [default to 10]

### Return type

[**[ProductBuyerViewModel]**](ProductBuyerViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

