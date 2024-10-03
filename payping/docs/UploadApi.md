# _.UploadApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadInvoiceAttachment**](UploadApi.md#uploadInvoiceAttachment) | **POST** /v1/Upload/InvoiceAttachment | آپلود فایل‌ ضمیمه یک فاکتور
[**uploadItem**](UploadApi.md#uploadItem) | **POST** /v1/Upload/Item | آپلود عکس یک آیتم‌مالی
[**uploadProfilePic**](UploadApi.md#uploadProfilePic) | **POST** /v1/Upload/ProfilePic | آپلود عکس پروفایل کاربری


<a name="uploadInvoiceAttachment"></a>
# **uploadInvoiceAttachment**
> uploadInvoiceAttachment(file)

آپلود فایل‌ ضمیمه یک فاکتور

محدودیت‌های فایل‌های ورودی:    محدودیت ندارد.

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

var apiInstance = new _.UploadApi();

var file = "/path/to/file.txt"; // File | بارگزاری فایل


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadInvoiceAttachment(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| بارگزاری فایل | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadItem"></a>
# **uploadItem**
> uploadItem(file)

آپلود عکس یک آیتم‌مالی

محدودیت‌های فایل‌های ورودی:    JPG, PNG, JPEG

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

var apiInstance = new _.UploadApi();

var file = "/path/to/file.txt"; // File | بارگزاری فایل


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadItem(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| بارگزاری فایل | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadProfilePic"></a>
# **uploadProfilePic**
> uploadProfilePic(file)

آپلود عکس پروفایل کاربری

محدودیت‌های فایل‌های ورودی:    JPG, PNG, JPEG

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

var apiInstance = new _.UploadApi();

var file = "/path/to/file.txt"; // File | بارگزاری فایل


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadProfilePic(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| بارگزاری فایل | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

