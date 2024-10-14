# _.InvoiceCreateScheduleViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ccToes** | [**[InvoiceCcToCreateOrUpdateViewModel]**](InvoiceCcToCreateOrUpdateViewModel.md) | ایمیل ها | [optional] 
**billToes** | [**[InvoiceBillToCreateOrUpdateViewModel]**](InvoiceBillToCreateOrUpdateViewModel.md) | مشتریان | [optional] 
**createStatus** | **Number** | نوع ثبت:  1 = ارسال  2 = دستی پرداخت شد | [optional] 
**paidManualDescription** | **String** | شرح پرداخت دستی | [optional] [default to '']
**saveToTemplate** | **Boolean** | ذخیره به عنوان قالب | [optional] [default to false]
**templateCode** | **String** | کد یکتای قالب فاکتور | [optional] [default to '']
**invoiceNumber** | **Number** | شماره فاکتور | [optional] 
**invoiceTitle** | **String** | عنوان فاکتور | [optional] 
**invoiceDateTime** | **Date** | تاریخ ثبت | [optional] 
**dueDate** | **Date** | تاریخ سررسید- تاریخی که باید پرداخت صورت پذیرد | [optional] 
**totalDiscountValue** | **Number** | تخفیف به کل فاکتور | [optional] 
**totalDiscountType** | **Number** | نوع تخفیف به کل فاکتور:  0 = مبلغ  1 = درصد | [optional] 
**shipping** | **Number** | هزینه حمل و نقل | [optional] 
**notes** | **String** | پیامی جهت نمایش به پرداخت کننده | [optional] [default to '']
**termsAndConditions** | **String** | متن شرایط و قوانین جهت نمایش به پرداخت کننده | [optional] [default to '']
**memo** | **String** | ایجاد یک متن دلخواه جهت یادآوری فقط برای صادر کننده فاکتور | [optional] [default to '']
**invoiceSchulder** | [**InvoiceSchulderCreateOrUpdateViewModel**](InvoiceSchulderCreateOrUpdateViewModel.md) | ارسال زماندار که رابطه (یک به یک) یا (یک به صفر) دارد | [optional] 
**invoiceItems** | [**[InvoiceItemCreateViewModel]**](InvoiceItemCreateViewModel.md) | آیتم های مالی فاکتور | [optional] 
**isSendAttachmentsAfterPayment** | **Boolean** | نمایش فایل های ضمیمه به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**isSendNotesAndTermsAfterPayment** | **Boolean** | نمایش پیام به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**isSendTermsAfterPayment** | **Boolean** | نمایش متن قوانین و مقررات به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**attachmentsIds** | **[String]** | کلید(های) یکتا دریافت شده از سرویس آپلود به صورت آرایه از رشته ها قرار دهید | [optional] 
**isDevicePayment** | **Boolean** | ثبت فاکتور بدون مشتری = true, با مشتری = false | [optional] [default to false]


<a name="CreateStatusEnum"></a>
## Enum: CreateStatusEnum


* `_1` (value: `1`)

* `_2` (value: `2`)




<a name="TotalDiscountTypeEnum"></a>
## Enum: TotalDiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




