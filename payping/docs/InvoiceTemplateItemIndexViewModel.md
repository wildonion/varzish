# _.InvoiceTemplateItemIndexViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | کد یکتا | [optional] 
**name** | **String** | عنوان | [optional] 
**description** | **String** | توضیحات | [optional] 
**quantity** | **Number** | تعداد | [optional] 
**discountType** | **Number** | نوع تخفیف:  0 = مبلغ  1 = درصد | [optional] 
**discountPercent** | **Number** | درصد تخفیف | [optional] 
**discountAmount** | **Number** | مبلغ تخفیف | [optional] 
**tax** | **Boolean** | دارای مالیات = true, نداشتن مالیات = false | [optional] 
**taxRate** | **Number** | مقدار درصد مالیات | [optional] 
**price** | **Number** | مبلغ فی | [optional] 
**totalPrice** | **Number** | مبلغ فی - مبلغ تخفیف) * تعداد = مجموع) | [optional] 
**amount** | **Number** | مجموع + مالیات = پرداختی | [optional] 


<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




