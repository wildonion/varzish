# _.InvoiceItemCreateViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | کلید یکتا | [optional] [default to '']
**name** | **String** | عنوان | [optional] [default to '']
**description** | **String** | توضیحات | [optional] [default to '']
**tax** | **Boolean** | دارای مالیات = true, نداشتن مالیات = false | [optional] [default to false]
**quantity** | **Number** | تعداد | [optional] [default to 1]
**discountValue** | **Number** | مقدار تخفیف | [optional] 
**discountType** | **Number** | نوع تخفیف:  0 = مبلغ  1 = درصد | [optional] 
**discountCouponCode** | **String** | کد یکتا تخفیف از بخش تخفیف ها | [optional] 
**price** | **Number** | مبلغ فی | [optional] [default to 0.0]


<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `_0` (value: `0`)

* `_1` (value: `1`)




