# _.InvoiceTemplateCreateViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateName** | **String** | عنوان | [default to '']
**totalDiscountValue** | **Number** | تخفیف به کل فاکتور | [optional] 
**totalDiscountType** | **Number** | نوع تخفیف به کل فاکتور:  0 = مبلغ  1 = درصد | [optional] 
**shipping** | **Number** | هزینه حمل و نقل | [optional] 
**notes** | **String** | پیامی جهت نمایش به پرداخت کننده | [optional] [default to '']
**termsAndConditions** | **String** | متن شرایط و قوانین جهت نمایش به پرداخت کننده | [optional] [default to '']
**memo** | **String** | ایجاد یک متن دلخواه جهت یادآوری فقط برای صادر کننده فاکتور | [optional] [default to '']
**invoiceSchulder** | [**InvoiceTemplateSchulderCreateOrUpdateViewModel**](InvoiceTemplateSchulderCreateOrUpdateViewModel.md) | ارسال زماندار که رابطه (یک به یک) یا (یک به صفر) دارد | [optional] 
**invoiceTemplateItems** | [**[InvoiceTemplateItemCreateViewModel]**](InvoiceTemplateItemCreateViewModel.md) | آیتم های مالی فاکتور | [optional] 
**isSendAttachmentsAfterPayment** | **Boolean** | نمایش فایل های ضمیمه به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**isSendNotesAndTermsAfterPayment** | **Boolean** | نمایش پیام به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**isSendTermsAfterPayment** | **Boolean** | نمایش متن قوانین و مقررات به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] [default to false]
**attachmentsIds** | **[String]** | کلید(های) یکتا دریافت شده از سرویس آپلود به صورت آرایه از رشته ها قرار دهید | [optional] 


<a name="TotalDiscountTypeEnum"></a>
## Enum: TotalDiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




