# _.ProductApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productCreate**](ProductApi.md#productCreate) | **POST** /v1/product | ساخت یک آیتم‌ مالی جدید
[**productDelete**](ProductApi.md#productDelete) | **DELETE** /v1/product/{code} | حذف یک آیتم مالی
[**productEdit**](ProductApi.md#productEdit) | **PUT** /v1/product | بروزرسانی آیتم مالی
[**productGet**](ProductApi.md#productGet) | **GET** /v1/product/{code} | نمایش یک آیتم مالی
[**productGetList**](ProductApi.md#productGetList) | **GET** /v1/product/List | دریافت لیست آیتم‌های مالی


<a name="productCreate"></a>
# **productCreate**
> CodeVM productCreate(opts)

ساخت یک آیتم‌ مالی جدید

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

var apiInstance = new _.ProductApi();

var opts = { 
  'model': new _.ProductCreateViewModel() // ProductCreateViewModel | مشخصات آیتم مالی
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ProductCreateViewModel**](ProductCreateViewModel.md)| مشخصات آیتم مالی | [optional] 

### Return type

[**CodeVM**](CodeVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productDelete"></a>
# **productDelete**
> productDelete(code)

حذف یک آیتم مالی

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

var apiInstance = new _.ProductApi();

var code = "code_example"; // String | کد آیتم مالی


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد آیتم مالی | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productEdit"></a>
# **productEdit**
> productEdit(opts)

بروزرسانی آیتم مالی

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

var apiInstance = new _.ProductApi();

var opts = { 
  'model': new _.ProductEditViewModel() // ProductEditViewModel | مشخصات آیتم مالی
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.productEdit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ProductEditViewModel**](ProductEditViewModel.md)| مشخصات آیتم مالی | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productGet"></a>
# **productGet**
> ProductFullDeatilViewModel productGet(code)

نمایش یک آیتم مالی

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

var apiInstance = new _.ProductApi();

var code = "code_example"; // String | کد آیتم مالی


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد آیتم مالی | 

### Return type

[**ProductFullDeatilViewModel**](ProductFullDeatilViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productGetList"></a>
# **productGetList**
> [ProductListItemViewModel] productGetList(opts)

دریافت لیست آیتم‌های مالی

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

var apiInstance = new _.ProductApi();

var opts = { 
  'offset': 0, // Number | شماره ابتدا لیست
  'limit': 10, // Number | شماره انتها لیست
  'witharchived': false, // Boolean | اضافه شدن آیتم‌های آرشیو شده
  'search': "search_example" // String | کیلدواژه جستجو در آیتم‌های مالی
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productGetList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شماره ابتدا لیست | [optional] [default to 0]
 **limit** | **Number**| شماره انتها لیست | [optional] [default to 10]
 **witharchived** | **Boolean**| اضافه شدن آیتم‌های آرشیو شده | [optional] [default to false]
 **search** | **String**| کیلدواژه جستجو در آیتم‌های مالی | [optional] 

### Return type

[**[ProductListItemViewModel]**](ProductListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

