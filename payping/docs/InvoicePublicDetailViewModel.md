# _.InvoicePublicDetailViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payedDateTime** | **Date** | تاریخ پرداخت | [optional] 
**canceledDateTime** | **Date** | تاریخ لغو | [optional] 
**expiredDateTime** | **Date** | تاریخ معوق شدن | [optional] 
**code** | **String** | کلید یکتای فاکتور | [optional] 
**parentCode** | **String** | کلید والد بودن فاکتور | [optional] 
**paymentCode** | **String** | کد یکتای پرداخت | [optional] 
**ccToes** | [**[InvoiceCcToDetailViewModel]**](InvoiceCcToDetailViewModel.md) | لیست ایمیل | [optional] 
**billToes** | [**[InvoiceBillToDetailViewModel]**](InvoiceBillToDetailViewModel.md) | لیست مشتری | [optional] 
**status** | **Number** | وضعیت فاکتور:  0 = پیش نویس  1 = در انتظار پرداخت  2 = پرداخت شد  3 = معوق  4 = لغو شده  5 = همه | [optional] 
**paidManualDescription** | **String** | شرح پرداخت دستی | [optional] 
**saveToTemplate** | **Boolean** | ذخیره به عنوان قالب فاکتور | [optional] 
**invoiceNumber** | **Number** | شماره فاکتور | [optional] 
**invoiceTitle** | **String** | عنوان فاکتور | [optional] 
**invoiceDateTime** | **Date** | تاریخ ثبت | [optional] 
**dueDate** | **Date** | تاریخ سررسید | [optional] 
**subTotal** | **Number** | جمع مبلغ پرداختی آیتم های مالی | [optional] 
**itemsDiscountAmount** | **Number** | جمع مبلغ تخفیف آیتم های مالی | [optional] 
**totalDiscountAmount** | **Number** | مبلغ تخفیف به کل فاکتور | [optional] 
**totalDiscountPercent** | **Number** | درصد تخفیف به کل فاکتور | [optional] 
**totalDiscountType** | **Number** | نوع تخفیف به کل فاکتور:  0 = مبلغ  1 = درصد | [optional] 
**sumDiscountAmount** | **Number** | جمع کل تخفیف اعمال شده روی فاکتور | [optional] 
**totalTaxtionAmount** | **Number** | مبلغ مالیات | [optional] 
**shipping** | **Number** | هزینه حمل و نقل | [optional] 
**total** | **Number** | مبلغ کل | [optional] 
**notes** | **String** | پیامی جهت نمایش به پرداخت کننده | [optional] 
**termsAndConditions** | **String** | متن شرایط و قوانین جهت نمایش به پرداخت کننده | [optional] 
**memo** | **String** | متن دلخواه جهت یادآوری فقط برای صادر کننده فاکتور | [optional] 
**invoiceSchulder** | [**InvoiceSchulderDetailViewModel**](InvoiceSchulderDetailViewModel.md) | ارسال زماندار که رابطه (یک به یک) یا (یک به صفر) دارد | [optional] 
**invoiceItems** | [**[InvoiceItemDetailViewModel]**](InvoiceItemDetailViewModel.md) | آیتم های مالی فاکتور | [optional] 
**isSendAttachmentsAfterPayment** | **Boolean** | نمایش فایل های ضمیمه به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**isSendNotesAndTermsAfterPayment** | **Boolean** | نمایش پیام به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**isSendTermsAfterPayment** | **Boolean** | نمایش متن قوانین و مقررات به پرداخت کننده پس از پرداخت موفق = true, نمایش در قبل و بعد از پرداخت = false | [optional] 
**attachFileIds** | **[String]** | لیست کلید یکتای فایل های ضمیمه | [optional] 
**attachFileAddresses** | **[String]** | لیست آدرس فایل های ضمیمه | [optional] 
**qrCodeFileName** | **String** | آدرس تصویر بارکد فاکتور | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `_0` (value: `0`)

* `_1` (value: `1`)

* `_2` (value: `2`)

* `_3` (value: `3`)

* `_4` (value: `4`)

* `_5` (value: `5`)




<a name="TotalDiscountTypeEnum"></a>
## Enum: TotalDiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




