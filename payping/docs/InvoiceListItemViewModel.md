# _.InvoiceListItemViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | کلید یکتای فاکتور | [optional] 
**invoiceNumber** | **Number** | شماره فاکتور | [optional] 
**invoiceDateTime** | **Date** | تاریخ ثبت فاکتور | [optional] 
**dueDate** | **Date** | تاریخ سررسید فاکتور | [optional] 
**payedDateTime** | **Date** | تاریخ پرداخت | [optional] 
**canceledDateTime** | **Date** | تاریخ لغو | [optional] 
**invoiceTitle** | **String** | عنوان | [optional] 
**status** | **Number** | وضعیت فاکتور  0 = پیش نویس  1 = در انتظار پرداخت  2 = پرداخت شد  3 = معوق  4 = لغو شده  5 = همه | [optional] 
**total** | **Number** | مبلغ نهایی یا قابل پرداخت | [optional] 
**ccToes** | [**[InvoiceCcToListItemViewModel]**](InvoiceCcToListItemViewModel.md) | دریافت کننده های ایمیلی | [optional] 
**billToes** | [**[InvoiceBillToListItemViewModel]**](InvoiceBillToListItemViewModel.md) | دریافت کننده ها - مشتریان | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `_0` (value: `0`)

* `_1` (value: `1`)

* `_2` (value: `2`)

* `_3` (value: `3`)

* `_4` (value: `4`)

* `_5` (value: `5`)




