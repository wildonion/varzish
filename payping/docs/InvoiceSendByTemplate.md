# _.InvoiceSendByTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateCode** | **String** | کلید یکتای قالب فاکتور | 
**invoiceTitle** | **String** | عنوان فاکتور | [optional] 
**invoiceNumber** | **Number** | شماره فاکتور | [optional] [default to 1]
**invoiceDateTime** | **Date** | تاریخ ثبت | [optional] 
**dueDate** | **Date** | تاریخ سررسید- تاریخی که باید پرداخت صورت پذیرد | [optional] 
**ccToes** | [**[InvoiceCcToCreateOrUpdateViewModel]**](InvoiceCcToCreateOrUpdateViewModel.md) | لیست آدرس ایمیل | [optional] 
**billToes** | [**[InvoiceBillToCreateOrUpdateViewModel]**](InvoiceBillToCreateOrUpdateViewModel.md) | لیست مشتری | [optional] 
**isDevicePayment** | **Boolean** | ثبت فاکتور بدون مشتری = true, با مشتری = false | [optional] [default to false]


