# _.ReportApi

All URIs are relative to *https://api.payping.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportPaymentDetails**](ReportApi.md#reportPaymentDetails) | **GET** /v1/report/{code} | نمایش جزئیات تراکنش
[**reportTransactionReport**](ReportApi.md#reportTransactionReport) | **POST** /v1/report/TransactionReport | گزارش تراکنش ها
[**reportTransactionReportCount**](ReportApi.md#reportTransactionReportCount) | **POST** /v1/report/TransactionReportCount | تعداد تراکنش ها
[**reportWithdrawTransactions**](ReportApi.md#reportWithdrawTransactions) | **POST** /v1/report/WithdrawTransactions | دریافت لیست تسویه حساب
[**reportWithdrawTransactionsCount**](ReportApi.md#reportWithdrawTransactionsCount) | **POST** /v1/report/WithdrawTransactionsCount | تعداد لیست تسویه حساب


<a name="reportPaymentDetails"></a>
# **reportPaymentDetails**
> PaymentDetailsVM reportPaymentDetails(code)

نمایش جزئیات تراکنش

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

var apiInstance = new _.ReportApi();

var code = "code_example"; // String | کد پرداخت


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportPaymentDetails(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| کد پرداخت | 

### Return type

[**PaymentDetailsVM**](PaymentDetailsVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reportTransactionReport"></a>
# **reportTransactionReport**
> [TransactionReportViewModel] reportTransactionReport(opts)

گزارش تراکنش ها

از این متد برای نمایش جزئیات تراکنش های کاربر استفاده می شود

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

var apiInstance = new _.ReportApi();

var opts = { 
  'model': new _.TransactionReportModel() // TransactionReportModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportTransactionReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**TransactionReportModel**](TransactionReportModel.md)|  | [optional] 

### Return type

[**[TransactionReportViewModel]**](TransactionReportViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportTransactionReportCount"></a>
# **reportTransactionReportCount**
> ResultVM reportTransactionReportCount(opts)

تعداد تراکنش ها

از این متد برای نمایش تعداد تراکنش های برگشت داده شده از متد TransactionReport استفاده می شود

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

var apiInstance = new _.ReportApi();

var opts = { 
  'model': new _.BaseTransactionReport() // BaseTransactionReport | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportTransactionReportCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**BaseTransactionReport**](BaseTransactionReport.md)|  | [optional] 

### Return type

[**ResultVM**](ResultVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportWithdrawTransactions"></a>
# **reportWithdrawTransactions**
> [TransactionWithdrawDetailsViewModel] reportWithdrawTransactions(opts)

دریافت لیست تسویه حساب

به کمک این متد می توانید لیست درخواست های تسویه شده و در انتظار تسویه را نمایش دهید

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

var apiInstance = new _.ReportApi();

var opts = { 
  'model': new _.TransactionReportModel() // TransactionReportModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportWithdrawTransactions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**TransactionReportModel**](TransactionReportModel.md)|  | [optional] 

### Return type

[**[TransactionWithdrawDetailsViewModel]**](TransactionWithdrawDetailsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportWithdrawTransactionsCount"></a>
# **reportWithdrawTransactionsCount**
> ResultVM reportWithdrawTransactionsCount(opts)

تعداد لیست تسویه حساب

به کمک این متد می توانید تعداد لیست درخواست های تسویه شده و در انتظار تسویه را که از متد WithdrawTransactions دریافت کرده اید را نمایش دهید

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

var apiInstance = new _.ReportApi();

var opts = { 
  'model': new _.BaseTransactionReport() // BaseTransactionReport | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportWithdrawTransactionsCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**BaseTransactionReport**](BaseTransactionReport.md)|  | [optional] 

### Return type

[**ResultVM**](ResultVM.md)

### Authorization

[Bearer](../README.md#Bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

