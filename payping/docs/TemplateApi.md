# _.TemplateApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateDelete**](TemplateApi.md#templateDelete) | **DELETE** /v1/Template/{code} | حذف قالب
[**templateGet**](TemplateApi.md#templateGet) | **GET** /v1/Template/{code} | دریافت قالب
[**templateList**](TemplateApi.md#templateList) | **GET** /v1/Template/List | لیست قالب ها
[**templateListCount**](TemplateApi.md#templateListCount) | **GET** /v1/Template/ListCount | تعداد قالب ها
[**templateListNonSchedule**](TemplateApi.md#templateListNonSchedule) | **GET** /v1/Template/ListNonSchedule | لیست قالب های غیر زمانبندی
[**templateListNonScheduleCount**](TemplateApi.md#templateListNonScheduleCount) | **GET** /v1/Template/ListNonScheduleCount | تعداد قالب های غیر زمانبندی
[**templateListSchedule**](TemplateApi.md#templateListSchedule) | **GET** /v1/Template/ListSchedule | لیست قالب های زمانبندی
[**templateListScheduleCount**](TemplateApi.md#templateListScheduleCount) | **GET** /v1/Template/ListScheduleCount | تعداد قالب های زمانبندی
[**templatePost**](TemplateApi.md#templatePost) | **POST** /v1/Template | قالب جدید
[**templatePut**](TemplateApi.md#templatePut) | **PUT** /v1/Template/{code} | بروزرسانی قالب


<a name="templateDelete"></a>
# **templateDelete**
> 'String' templateDelete(code)

حذف قالب

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

var apiInstance = new _.TemplateApi();

var code = "code_example"; // String | کلید یکتای قالب


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای قالب | 

### Return type

**'String'**

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateGet"></a>
# **templateGet**
> InvoiceTemplateDetailViewModel templateGet(code)

دریافت قالب

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

var apiInstance = new _.TemplateApi();

var code = "code_example"; // String | کلید یکتای قالب


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای قالب | 

### Return type

[**InvoiceTemplateDetailViewModel**](InvoiceTemplateDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateList"></a>
# **templateList**
> [InvoiceTemplateListItemViewModel] templateList(opts)

لیست قالب ها

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'offset': 0, // Number | شروع صفحه از شماره 1
  'limit': 10, // Number | تعداد سطر بازگشت داده ها مثال : 10
  'search': "search_example", // String | متن مورد نظر جهت جستجو
  'code': "code_example" // String | کد قالب
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شروع صفحه از شماره 1 | [optional] [default to 0]
 **limit** | **Number**| تعداد سطر بازگشت داده ها مثال : 10 | [optional] [default to 10]
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 
 **code** | **String**| کد قالب | [optional] 

### Return type

[**[InvoiceTemplateListItemViewModel]**](InvoiceTemplateListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateListCount"></a>
# **templateListCount**
> ListCountViewModel templateListCount(opts)

تعداد قالب ها

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'search': "search_example", // String | متن مورد نظر جهت جستجو
  'code': "code_example" // String | کد قالب
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateListCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 
 **code** | **String**| کد قالب | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateListNonSchedule"></a>
# **templateListNonSchedule**
> [InvoiceTemplateListItemViewModel] templateListNonSchedule(opts)

لیست قالب های غیر زمانبندی

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'offset': 0, // Number | شروع صفحه از شماره 1
  'limit': 10, // Number | تعداد سطر بازگشت داده ها مثال : 10
  'search': "search_example" // String | متن مورد نظر جهت جستجو
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateListNonSchedule(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شروع صفحه از شماره 1 | [optional] [default to 0]
 **limit** | **Number**| تعداد سطر بازگشت داده ها مثال : 10 | [optional] [default to 10]
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 

### Return type

[**[InvoiceTemplateListItemViewModel]**](InvoiceTemplateListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateListNonScheduleCount"></a>
# **templateListNonScheduleCount**
> ListCountViewModel templateListNonScheduleCount(opts)

تعداد قالب های غیر زمانبندی

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'search': "search_example" // String | متن مورد نظر جهت جستجو
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateListNonScheduleCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateListSchedule"></a>
# **templateListSchedule**
> [InvoiceTemplateListItemViewModel] templateListSchedule(opts)

لیست قالب های زمانبندی

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'offset': 0, // Number | شروع صفحه از شماره 1
  'limit': 10, // Number | تعداد سطر بازگشت داده ها مثال : 10
  'search': "search_example" // String | متن مورد نظر جهت جستجو
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateListSchedule(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| شروع صفحه از شماره 1 | [optional] [default to 0]
 **limit** | **Number**| تعداد سطر بازگشت داده ها مثال : 10 | [optional] [default to 10]
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 

### Return type

[**[InvoiceTemplateListItemViewModel]**](InvoiceTemplateListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateListScheduleCount"></a>
# **templateListScheduleCount**
> ListCountViewModel templateListScheduleCount(opts)

تعداد قالب های زمانبندی

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'search': "search_example" // String | متن مورد نظر جهت جستجو
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateListScheduleCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| متن مورد نظر جهت جستجو | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templatePost"></a>
# **templatePost**
> InvoiceTemplateDetailViewModel templatePost(opts)

قالب جدید

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

var apiInstance = new _.TemplateApi();

var opts = { 
  'value': new _.InvoiceTemplateCreateViewModel() // InvoiceTemplateCreateViewModel | مشخصات قالب
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceTemplateCreateViewModel**](InvoiceTemplateCreateViewModel.md)| مشخصات قالب | [optional] 

### Return type

[**InvoiceTemplateDetailViewModel**](InvoiceTemplateDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatePut"></a>
# **templatePut**
> InvoiceTemplateDetailViewModel templatePut(code, opts)

بروزرسانی قالب

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

var apiInstance = new _.TemplateApi();

var code = "code_example"; // String | کلید یکتای قالب

var opts = { 
  'value': new _.InvoiceTemplateEditViewModel() // InvoiceTemplateEditViewModel | قالب بروز شده
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatePut(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای قالب | 
 **value** | [**InvoiceTemplateEditViewModel**](InvoiceTemplateEditViewModel.md)| قالب بروز شده | [optional] 

### Return type

[**InvoiceTemplateDetailViewModel**](InvoiceTemplateDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

