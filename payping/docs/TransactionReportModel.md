# _.TransactionReportModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **Number** | نقطه شروع گزارش | [optional] 
**limit** | **Number** | نقطه پایان گزارش | [optional] 
**clientsInfos** | [**[ClientsInfo]**](ClientsInfo.md) | لیست ClientId,ClientInfo | [optional] 
**filter** | **[String]** | اعمال فیلتر بر روی فلگ های   کد پرداخت  مبلغ  تاریخ پرداخت  کد ارسالی مشتری به پی پینگ  توضیحات  نام یا شناسه پرداخت کننده | [optional] 
**transactionType** | **Number** | نوع تراکنش  دریافت ها =6  پرداخت ها=7 | [optional] 
**fromDate** | **Date** | تاریخ شروع گزارش | [optional] 
**toDate** | **Date** | تاریخ پایان گزارش | [optional] 


<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum


* `_6` (value: `6`)

* `_7` (value: `7`)




