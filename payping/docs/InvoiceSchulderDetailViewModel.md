# _.InvoiceSchulderDetailViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repeat** | **Number** | تکرار در هر X روز/هفته/ماه/سال | [optional] 
**schulderType** | **Number** | نوع زمانبندی:  0 = روزانه  1 = هفتگی  2 = ماهانه  3 = سالانه | [optional] 
**dueType** | **Number** | نوع پایان زمانبندی:  0 = پس از ساخت X فاکتور  1 = پایان دادن به ساخت فاکتور در تاریخ X  2 = ساخت نامحدود فاکتور | [optional] 
**endValue** | **String** | تعداد/تاریخ پایان، تولید فاکتور | [optional] 
**dueDateAfterHowManyDay** | **Number** | سررسید بعد از X روز | [optional] 
**invoiceSubSchulders** | [**[InvoiceSubSchulderDetailViewModel]**](InvoiceSubSchulderDetailViewModel.md) | لیست دستور ساخت فاکتورهای زمانبندی شده و وضعیت آن ها | [optional] 


<a name="SchulderTypeEnum"></a>
## Enum: SchulderTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)

* `_2` (value: `2`)

* `_3` (value: `3`)




<a name="DueTypeEnum"></a>
## Enum: DueTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)

* `_2` (value: `2`)




