# _.InvoiceSchulderCreateOrUpdateViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repeat** | **Number** | تکرار در هر X روز/هفته/ماه/سال | [optional] [default to 1]
**schulderType** | **Number** | نوع زمانبندی:  0 = روزانه  1 = هفتگی  2 = ماهانه  3 = سالانه | [optional] [default to SchulderTypeEnum._0]
**dueType** | **Number** | نوع پایان زمانبندی:  0 = پس از ساخت X فاکتور  1 = پایان دادن به ساخت فاکتور در تاریخ X  2 = ساخت نامحدود فاکتور | [optional] [default to DueTypeEnum._0]
**endValue** | **String** | تعداد/تاریخ پایان، تولید فاکتور | [optional] [default to '1']
**dueDateAfterHowManyDay** | **Number** | سررسید بعد از X روز | [optional] [default to 2]


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




