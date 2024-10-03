# _.InvoiceApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceBuyer**](InvoiceApi.md#invoiceBuyer) | **GET** /v1/Invoice/Buyer/{code} | دریافت مشخصات پرداخت کننده فاکتور
[**invoiceCancel**](InvoiceApi.md#invoiceCancel) | **POST** /v1/Invoice/Cancel | درخواست لغو فاکتور
[**invoiceDelete**](InvoiceApi.md#invoiceDelete) | **DELETE** /v1/Invoice/{code} | حذف فاکتور
[**invoiceDeleteSchedule**](InvoiceApi.md#invoiceDeleteSchedule) | **DELETE** /v1/Invoice/DeleteSchedule/{code} | حذف فاکتور زمانبندی شده
[**invoiceGet**](InvoiceApi.md#invoiceGet) | **GET** /v1/Invoice/{code} | دریافت فاکتور
[**invoiceList**](InvoiceApi.md#invoiceList) | **GET** /v1/Invoice/List | لیست فاکتور ها
[**invoiceListCount**](InvoiceApi.md#invoiceListCount) | **GET** /v1/Invoice/ListCount | تعداد فاکتور ها
[**invoiceListSchedule**](InvoiceApi.md#invoiceListSchedule) | **GET** /v1/Invoice/ListSchedule | لیست فاکتور ها زمانبندی شده
[**invoiceListScheduleCount**](InvoiceApi.md#invoiceListScheduleCount) | **GET** /v1/Invoice/ListScheduleCount | تعداد فاکتور ها زمانبندی شده
[**invoicePdf**](InvoiceApi.md#invoicePdf) | **GET** /v1/Invoice/Pdf/{code} | درخواست فاکتور غیر رسمی
[**invoicePost**](InvoiceApi.md#invoicePost) | **POST** /v1/Invoice | فاکتور جدید
[**invoicePut**](InvoiceApi.md#invoicePut) | **PUT** /v1/Invoice/{code} | بروزرسانی فاکتور
[**invoiceReminder**](InvoiceApi.md#invoiceReminder) | **POST** /v1/Invoice/Reminder/{code} | ارسال یادآوری فاکتور
[**invoiceScheduleGet**](InvoiceApi.md#invoiceScheduleGet) | **GET** /v1/Invoice/Schedule/{code} | دریافت فاکتور زمانبندی شده
[**invoiceSchedulePost**](InvoiceApi.md#invoiceSchedulePost) | **POST** /v1/Invoice/Schedule | فاکتور زمانبندی شده جدید
[**invoiceSend**](InvoiceApi.md#invoiceSend) | **POST** /v1/Invoice/Send/{code} | ارسال فاکتور
[**invoiceSendByTemplateAdvance**](InvoiceApi.md#invoiceSendByTemplateAdvance) | **POST** /v1/Invoice/SendByTemplateAdvance | ارسال فاکتور جدید با استفاده از قالب - پیشرفته
[**invoiceSendByTemplateSimple**](InvoiceApi.md#invoiceSendByTemplateSimple) | **POST** /v1/Invoice/SendByTemplateSimple | ارسال فاکتور جدید با استفاده از قالب - سریع
[**invoiceSetCustomer**](InvoiceApi.md#invoiceSetCustomer) | **POST** /v1/Invoice/SetCustomer | ثبت مشتری به فاکتور
[**invoiceSubschedulers**](InvoiceApi.md#invoiceSubschedulers) | **GET** /v1/Invoice/Subschedulers/{code} | دریافت اطلاعات زمانبندی شده فاکتور
[**invoiceSumPerStatus**](InvoiceApi.md#invoiceSumPerStatus) | **GET** /v1/Invoice/SumPerStatus | گزارش جمع مبلغ فاکتور ها براساس وضعیت


<a name="invoiceBuyer"></a>
# **invoiceBuyer**
> AddressBookDetailViewModel invoiceBuyer(code)

دریافت مشخصات پرداخت کننده فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceBuyer(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**AddressBookDetailViewModel**](AddressBookDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceCancel"></a>
# **invoiceCancel**
> InvoiceCancelResponse invoiceCancel(opts)

درخواست لغو فاکتور

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceCancelRequest() // InvoiceCancelRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceCancel(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceCancelRequest**](InvoiceCancelRequest.md)|  | [optional] 

### Return type

[**InvoiceCancelResponse**](InvoiceCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceDelete"></a>
# **invoiceDelete**
> 'String' invoiceDelete(code)

حذف فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceDelete(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 

### Return type

**'String'**

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceDeleteSchedule"></a>
# **invoiceDeleteSchedule**
> 'String' invoiceDeleteSchedule(code)

حذف فاکتور زمانبندی شده

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور زمانبندی شده


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceDeleteSchedule(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور زمانبندی شده | 

### Return type

**'String'**

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceGet"></a>
# **invoiceGet**
> InvoiceDetailViewModel invoiceGet(code)

دریافت فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 

### Return type

[**InvoiceDetailViewModel**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceList"></a>
# **invoiceList**
> [InvoiceListItemViewModel] invoiceList(opts)

لیست فاکتور ها

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'offset': 0, // Number | 
  'limit': 10, // Number | 
  'status': 5, // Number | فیلتر وضعیت
  'isArchived': false, // Boolean | فیلتر بایگانی
  'searchByDueDate': false, // Boolean | فیلتر با تاریخ سررسید
  'searchByCreateDate': false, // Boolean | فیلتر با تاریخ ثبت
  'searchDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | شروع از تاریخ
  'searchDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | تا تاریخ
  'search': "search_example", // String | متن جستجو
  'addressBookCode': "addressBookCode_example", // String | فیلتر بر اساس کد مشتری
  'invoiceCode': "invoiceCode_example" // String | فیلتر براساس کد فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 10]
 **status** | **Number**| فیلتر وضعیت | [optional] [default to 5]
 **isArchived** | **Boolean**| فیلتر بایگانی | [optional] [default to false]
 **searchByDueDate** | **Boolean**| فیلتر با تاریخ سررسید | [optional] [default to false]
 **searchByCreateDate** | **Boolean**| فیلتر با تاریخ ثبت | [optional] [default to false]
 **searchDateFrom** | **Date**| شروع از تاریخ | [optional] 
 **searchDateTo** | **Date**| تا تاریخ | [optional] 
 **search** | **String**| متن جستجو | [optional] 
 **addressBookCode** | **String**| فیلتر بر اساس کد مشتری | [optional] 
 **invoiceCode** | **String**| فیلتر براساس کد فاکتور | [optional] 

### Return type

[**[InvoiceListItemViewModel]**](InvoiceListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceListCount"></a>
# **invoiceListCount**
> ListCountViewModel invoiceListCount(opts)

تعداد فاکتور ها

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'status': 5, // Number | فیلتر وضعیت
  'isArchived': false, // Boolean | فیلتر بایگانی
  'searchByDueDate': false, // Boolean | فیلتر با تاریخ سررسید
  'searchByCreateDate': false, // Boolean | فیلتر با تاریخ ثبت
  'searchDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | شروع از تاریخ
  'searchDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | تا تاریخ
  'search': "search_example", // String | متن جستجو
  'addressBookCode': "addressBookCode_example", // String | فیلتر بر اساس کد مشتری
  'invoiceCode': "invoiceCode_example" // String | فیلتر براساس کد فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceListCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Number**| فیلتر وضعیت | [optional] [default to 5]
 **isArchived** | **Boolean**| فیلتر بایگانی | [optional] [default to false]
 **searchByDueDate** | **Boolean**| فیلتر با تاریخ سررسید | [optional] [default to false]
 **searchByCreateDate** | **Boolean**| فیلتر با تاریخ ثبت | [optional] [default to false]
 **searchDateFrom** | **Date**| شروع از تاریخ | [optional] 
 **searchDateTo** | **Date**| تا تاریخ | [optional] 
 **search** | **String**| متن جستجو | [optional] 
 **addressBookCode** | **String**| فیلتر بر اساس کد مشتری | [optional] 
 **invoiceCode** | **String**| فیلتر براساس کد فاکتور | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceListSchedule"></a>
# **invoiceListSchedule**
> [InvoiceListItemViewModel] invoiceListSchedule(opts)

لیست فاکتور ها زمانبندی شده

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'offset': 0, // Number | 
  'limit': 10, // Number | 
  'status': 5, // Number | فیلتر وضعیت
  'isArchived': false, // Boolean | فیلتر بایگانی
  'searchByDueDate': false, // Boolean | فیلتر با تاریخ سررسید
  'searchByCreateDate': false, // Boolean | فیلتر با تاریخ ثبت
  'searchDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | شروع از تاریخ
  'searchDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | تا تاریخ
  'search': "search_example", // String | متن جستجو
  'addressBookCode': "addressBookCode_example", // String | فیلتر بر اساس کد مشتری
  'invoiceCode': "invoiceCode_example" // String | فیلتر براساس کد فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceListSchedule(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 10]
 **status** | **Number**| فیلتر وضعیت | [optional] [default to 5]
 **isArchived** | **Boolean**| فیلتر بایگانی | [optional] [default to false]
 **searchByDueDate** | **Boolean**| فیلتر با تاریخ سررسید | [optional] [default to false]
 **searchByCreateDate** | **Boolean**| فیلتر با تاریخ ثبت | [optional] [default to false]
 **searchDateFrom** | **Date**| شروع از تاریخ | [optional] 
 **searchDateTo** | **Date**| تا تاریخ | [optional] 
 **search** | **String**| متن جستجو | [optional] 
 **addressBookCode** | **String**| فیلتر بر اساس کد مشتری | [optional] 
 **invoiceCode** | **String**| فیلتر براساس کد فاکتور | [optional] 

### Return type

[**[InvoiceListItemViewModel]**](InvoiceListItemViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceListScheduleCount"></a>
# **invoiceListScheduleCount**
> ListCountViewModel invoiceListScheduleCount(opts)

تعداد فاکتور ها زمانبندی شده

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'status': 5, // Number | فیلتر وضعیت
  'isArchived': false, // Boolean | فیلتر بایگانی
  'searchByDueDate': false, // Boolean | فیلتر با تاریخ سررسید
  'searchByCreateDate': false, // Boolean | فیلتر با تاریخ ثبت
  'searchDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | شروع از تاریخ
  'searchDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | تا تاریخ
  'search': "search_example", // String | متن جستجو
  'addressBookCode': "addressBookCode_example", // String | فیلتر بر اساس کد مشتری
  'invoiceCode': "invoiceCode_example" // String | فیلتر براساس کد فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceListScheduleCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Number**| فیلتر وضعیت | [optional] [default to 5]
 **isArchived** | **Boolean**| فیلتر بایگانی | [optional] [default to false]
 **searchByDueDate** | **Boolean**| فیلتر با تاریخ سررسید | [optional] [default to false]
 **searchByCreateDate** | **Boolean**| فیلتر با تاریخ ثبت | [optional] [default to false]
 **searchDateFrom** | **Date**| شروع از تاریخ | [optional] 
 **searchDateTo** | **Date**| تا تاریخ | [optional] 
 **search** | **String**| متن جستجو | [optional] 
 **addressBookCode** | **String**| فیلتر بر اساس کد مشتری | [optional] 
 **invoiceCode** | **String**| فیلتر براساس کد فاکتور | [optional] 

### Return type

[**ListCountViewModel**](ListCountViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoicePdf"></a>
# **invoicePdf**
> InvoicePdfResponseViewModel invoicePdf(code)

درخواست فاکتور غیر رسمی

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoicePdf(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 

### Return type

[**InvoicePdfResponseViewModel**](InvoicePdfResponseViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoicePost"></a>
# **invoicePost**
> [InvoiceDetailViewModel] invoicePost(opts)

فاکتور جدید

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceCreateViewModel() // InvoiceCreateViewModel | مشخصات فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoicePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceCreateViewModel**](InvoiceCreateViewModel.md)| مشخصات فاکتور | [optional] 

### Return type

[**[InvoiceDetailViewModel]**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoicePut"></a>
# **invoicePut**
> InvoiceDetailViewModel invoicePut(code, opts)

بروزرسانی فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور

var opts = { 
  'value': new _.InvoiceEditViewModel() // InvoiceEditViewModel | فاکتور بروز شده
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoicePut(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 
 **value** | [**InvoiceEditViewModel**](InvoiceEditViewModel.md)| فاکتور بروز شده | [optional] 

### Return type

[**InvoiceDetailViewModel**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceReminder"></a>
# **invoiceReminder**
> InvoiceSendReminderResponseViewModel invoiceReminder(code)

ارسال یادآوری فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceReminder(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 

### Return type

[**InvoiceSendReminderResponseViewModel**](InvoiceSendReminderResponseViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceScheduleGet"></a>
# **invoiceScheduleGet**
> ScheduleInvoiceWithChilds invoiceScheduleGet(code)

دریافت فاکتور زمانبندی شده

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceScheduleGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**ScheduleInvoiceWithChilds**](ScheduleInvoiceWithChilds.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceSchedulePost"></a>
# **invoiceSchedulePost**
> InvoiceDetailViewModel invoiceSchedulePost(opts)

فاکتور زمانبندی شده جدید

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceCreateScheduleViewModel() // InvoiceCreateScheduleViewModel | مشخصات فاکتور زمانبندی شده
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSchedulePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceCreateScheduleViewModel**](InvoiceCreateScheduleViewModel.md)| مشخصات فاکتور زمانبندی شده | [optional] 

### Return type

[**InvoiceDetailViewModel**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceSend"></a>
# **invoiceSend**
> InvoiceSendInvoiceResponseViewModel invoiceSend(code)

ارسال فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | کلید یکتای فاکتور


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSend(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کلید یکتای فاکتور | 

### Return type

[**InvoiceSendInvoiceResponseViewModel**](InvoiceSendInvoiceResponseViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceSendByTemplateAdvance"></a>
# **invoiceSendByTemplateAdvance**
> [InvoiceDetailViewModel] invoiceSendByTemplateAdvance(opts)

ارسال فاکتور جدید با استفاده از قالب - پیشرفته

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceSendByTemplate() // InvoiceSendByTemplate | مشخصات فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSendByTemplateAdvance(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceSendByTemplate**](InvoiceSendByTemplate.md)| مشخصات فاکتور | [optional] 

### Return type

[**[InvoiceDetailViewModel]**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceSendByTemplateSimple"></a>
# **invoiceSendByTemplateSimple**
> InvoiceDetailViewModel invoiceSendByTemplateSimple(opts)

ارسال فاکتور جدید با استفاده از قالب - سریع

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceSendByTemplateSimple() // InvoiceSendByTemplateSimple | مشخصات فاکتور
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSendByTemplateSimple(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceSendByTemplateSimple**](InvoiceSendByTemplateSimple.md)| مشخصات فاکتور | [optional] 

### Return type

[**InvoiceDetailViewModel**](InvoiceDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceSetCustomer"></a>
# **invoiceSetCustomer**
> InvoiceConfirmPaymentResponseViewModel invoiceSetCustomer(opts)

ثبت مشتری به فاکتور

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

var apiInstance = new _.InvoiceApi();

var opts = { 
  'value': new _.InvoiceSetCustomerRequestViewModel() // InvoiceSetCustomerRequestViewModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSetCustomer(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**InvoiceSetCustomerRequestViewModel**](InvoiceSetCustomerRequestViewModel.md)|  | [optional] 

### Return type

[**InvoiceConfirmPaymentResponseViewModel**](InvoiceConfirmPaymentResponseViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invoiceSubschedulers"></a>
# **invoiceSubschedulers**
> [InvoiceSubSchulderDetailViewModel] invoiceSubschedulers(code)

دریافت اطلاعات زمانبندی شده فاکتور

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

var apiInstance = new _.InvoiceApi();

var code = "code_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSubschedulers(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**[InvoiceSubSchulderDetailViewModel]**](InvoiceSubSchulderDetailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invoiceSumPerStatus"></a>
# **invoiceSumPerStatus**
> InvoiceDashboardReportViewModel invoiceSumPerStatus()

گزارش جمع مبلغ فاکتور ها براساس وضعیت

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

var apiInstance = new _.InvoiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.invoiceSumPerStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InvoiceDashboardReportViewModel**](InvoiceDashboardReportViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

