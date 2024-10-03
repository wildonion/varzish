# _.InvoiceTemplateDetailViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | کد یکتا | [optional] 
**templateName** | **String** | عنوان | [optional] 
**subTotal** | **Number** | جمع مبلغ پرداختی آیتم های مالی | [optional] 
**itemsDiscountAmount** | **Number** | جمع مبلغ تخفیف آیتم های مالی | [optional] 
**totalDiscountAmount** | **Number** | جمع مبلغ تخفیف آیتم های مالی | [optional] 
**totalDiscountPercent** | **Number** | درصد تخفیف به کل فاکتور | [optional] 
**totalDiscountType** | **Number** | نوع تخفیف به کل فاکتور:  0 = مبلغ  1 = درصد | [optional] 
**sumDiscountAmount** | **Number** | جمع کل تخفیف اعمال شده روی فاکتور | [optional] 
**totalTaxtionAmount** | **Number** | مبلغ مالیات | [optional] 
**shipping** | **Number** | مبلغ حمل و نقل | [optional] 
**total** | **Number** | مبلغ کل | [optional] 
**notes** | **String** | پیامی جهت نمایش به پرداخت کننده | [optional] 
**termsAndConditions** | **String** | متن شرایط و قوانین جهت نمایش به پرداخت کننده | [optional] 
**memo** | **String** | متن دلخواه جهت یادآوری فقط برای صادر کننده فاکتور | [optional] 
**invoiceTemplateItems** | [**[InvoiceTemplateItemIndexViewModel]**](InvoiceTemplateItemIndexViewModel.md) | آیتم های مالی فاکتور | [optional] 
**invoiceSchulder** | [**InvoiceTemplateSchulderIndexViewModel**](InvoiceTemplateSchulderIndexViewModel.md) | ارسال زماندار که رابطه (یک به یک) یا (یک به صفر) دارد | [optional] 
**isSendAttachmentsAfterPayment** | **Boolean** | نمایش فایل های ضمیمه به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**isSendNotesAndTermsAfterPayment** | **Boolean** | نمایش پیام به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**isSendTermsAfterPayment** | **Boolean** | نمایش متن قوانین و مقررات به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**attachFileIds** | **[String]** | لیست کلید یکتای فایل های ضمیمه | [optional] 
**attachFileAddresses** | **[String]** | لیست آدرس فایل های ضمیمه | [optional] 


<a name="TotalDiscountTypeEnum"></a>
## Enum: TotalDiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




