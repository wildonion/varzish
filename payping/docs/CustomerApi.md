# _.CustomerApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressBookDelete**](CustomerApi.md#addressBookDelete) | **DELETE** /v1/customer/{code} | حذف مشتری
[**addressBookGet**](CustomerApi.md#addressBookGet) | **GET** /v1/customer/{code} | مشخصات مشتری
[**addressBookList**](CustomerApi.md#addressBookList) | **GET** /v1/customer/List | لیست مشتریان
[**addressBookListCount**](CustomerApi.md#addressBookListCount) | **GET** /v1/customer/ListCount | تعداد مشتریان
[**addressBookPost**](CustomerApi.md#addressBookPost) | **POST** /v1/customer | مشتری جدید
[**addressBookPut**](CustomerApi.md#addressBookPut) | **PUT** /v1/customer/{code} | بروزرسانی مشخصات مشتری


<a name="addressBookDelete"></a>
# **addressBookDelete**
> 'String' addressBookDelete(code)

حذف مشتری

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

var apiInstance = new _.CustomerApi();

var code = "code_example"; // String | کلید یکتا مشتری


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتا مشتری | 

### Return type

**'String'**

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressBookGet"></a>
# **addressBookGet**
> AddressBookDetailViewModel addressBookGet(code)

مشخصات مشتری

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

var apiInstance = new _.CustomerApi();

var code = "code_example"; // String | کد مشتری ارسال نمایید


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد مشتری ارسال نمایید | 

### Return type

[**AddressBookDetailViewModel**](AddressBookDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressBookList"></a>
# **addressBookList**
> [AddressBookListItemViewModel] addressBookList(opts)

لیست مشتریان

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

var apiInstance = new _.CustomerApi();

var opts = { 
  'offset': 0, // Number | شروع صفحه از شماره 1
  'limit': 10, // Number | تعداد سطر بازگشت داده ها مثال : 10
  'search': "search_example", // String | متن مورد نظر جهت جستجو
  'customerType': 0, // Number | نوع مشتری - حقیقی یا حقوقی
  'withPhoto': false, // Boolean | با آدرس تصویر مشتری
  'code': "code_example" // String | کد مشتری
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شروع صفحه از شماره 1 | [optional] [default to 0]
 **limit** | **Number**| تعداد سطر بازگشت داده ها مثال : 10 | [optional] [default to 10]
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 
 **customerType** | **Number**| نوع مشتری - حقیقی یا حقوقی | [optional] [default to 0]
 **withPhoto** | **Boolean**| با آدرس تصویر مشتری | [optional] [default to false]
 **code** | **String**| کد مشتری | [optional] 

### Return type

[**[AddressBookListItemViewModel]**](AddressBookListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressBookListCount"></a>
# **addressBookListCount**
> ListCountViewModel addressBookListCount(opts)

تعداد مشتریان

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

var apiInstance = new _.CustomerApi();

var opts = { 
  'search': "search_example", // String | متن مورد نظر جهت جستجو
  'customerType': 0, // Number | نوع مشتری - حقیقی یا حقوقی
  'code': "code_example" // String | کد مشتری
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookListCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 
 **customerType** | **Number**| نوع مشتری - حقیقی یا حقوقی | [optional] [default to 0]
 **code** | **String**| کد مشتری | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addressBookPost"></a>
# **addressBookPost**
> AddressBookDetailViewModel addressBookPost(opts)

مشتری جدید

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

var apiInstance = new _.CustomerApi();

var opts = { 
  'value': new _.AddressBookCreateViewModel() // AddressBookCreateViewModel | مشخصات مشتری
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**AddressBookCreateViewModel**](AddressBookCreateViewModel.md)| مشخصات مشتری | [optional] 

### Return type

[**AddressBookDetailViewModel**](AddressBookDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addressBookPut"></a>
# **addressBookPut**
> AddressBookDetailViewModel addressBookPut(code, opts)

بروزرسانی مشخصات مشتری

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

var apiInstance = new _.CustomerApi();

var code = "code_example"; // String | کلید یکتا مشتری

var opts = { 
  'value': new _.AddressBookEditViewModel() // AddressBookEditViewModel | مشخصات بروز شده مشتری
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addressBookPut(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتا مشتری | 
 **value** | [**AddressBookEditViewModel**](AddressBookEditViewModel.md)| مشخصات بروز شده مشتری | [optional] 

### Return type

[**AddressBookDetailViewModel**](AddressBookDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

