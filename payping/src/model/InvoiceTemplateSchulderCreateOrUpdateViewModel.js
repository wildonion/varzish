/*
 * سرویس‌های پلتفرم مالی پی‌پینگ
 * # مستندات سرویس‌های عمومی پلت‌فرم مالی پی‌پینگ   لینک‌های پشتیبانی: تلگرام: [t.me/payping](t.me/payping) | ایمیل: [info@payping.ir]() | تلفن: 02175038797  # مقدمه   تمامی وب‌ سرویس‌های توضیح داده شده در این مستندات به صورت [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) هستند و طبق همین چهارچوب باید با آنها ارتباط برقرار کرد.   توضیحات تکمیلی‌تر هر سرویس در آدرس زیر به صورت کامل قرار داده شده است.   جهت رفع هرگونه مشکل و یا پرسش با پشتیبانی در تماس باشید.   [راهنمای تکمیلی وب‌سرویس‌ها](https://www.payping.io/help/fa/category/api--qspohi/)    # POSTMAN  برای راحتی کار، فایل postman سرویس ها برای شما آماده شده است که می توانید از لینک زیر روند استفاده از آن را مطالعه بفرمایین و قالب مربوطه را دانلود نمایید.    [راهنمای postman](https://www.payping.io/help/fa/postman/)   # توضیحات تکمیلی برای تمام سرویس‌ها   برای فراخوانی سرویس‌های صفحه‌بندی (pagination) اگر پارامتر ورودی ارسال نشود، حداکثر ۱۰ آیتم نمایش داده می‌شود و همچنین حداکثر تعداد دریافت آیتم به ازای هر درخواست ۵۰ عدد می‌باشد و بیشتر از آن را سرویس پشتیبانی نمی‌کند و در صورت نیاز به بارگزاری تمام آیتم‌های یک سرویس به صورت یکجا با ایمیل به بخش پشتیبانی در تماس باشید. همینطور توجه داشته باشین واحد پول در تمام سرویس‌ها تومان می‌باشد و منطقه زمانی تمامی‌ تاریخ و ساعت‌ها برابر با ساعت جهانی یا UTC می‌باشد.   # نکاتی برای آپلود فایل‌ها   برای آپلود هرگونه فایل اعم از عکس پروفایل کاربران و یا گزارشات پرداخت‌ها و ... می‌بایست که از [سرویس بارگذاری فایل](#tag/Upload) استفاده کنید.    پس از انجام عملیات آپلود توسط سرویس بارگذاری فایل، تنها کافیست نام فایل آپلود شده که در خروجی سرویس به شما برگردانده می‌شود را ذخیره نمایید.   # جدول کدهای دریافتی از هر سرویس   بعد از ارسال هر درخواست به سمت سرور، از سمت ما طبق قواعد وب‌سرویس‌های RESTful یک کدی به شما بازگرداننده می‌شود.  هر کد معنایی دارد که در جدول زیر توضیحات مربوطه را می‌بینید   |شماره کد|توضیحات|  |-------|--------|  |`200`| عملیات با موفقیت انجام شد |  |`400`| مشکلی در ارسال درخواست وجود دارد |  |`500`| مشکلی در سرور رخ داده است |  |`503`| سرور در حال حاضر قادر به پاسخگویی نمی‌باشد |  |`401`| عدم دسترسی|  |`403`| دسترسی غیر مجاز |  |`404`| آیتم درخواستی مورد نظر موجود نمی‌باشد |  
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root._) {
      root._ = {};
    }
    root._.InvoiceTemplateSchulderCreateOrUpdateViewModel = factory(root._.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InvoiceTemplateSchulderCreateOrUpdateViewModel model module.
   * @module model/InvoiceTemplateSchulderCreateOrUpdateViewModel
   * @version v1
   */

  /**
   * Constructs a new <code>InvoiceTemplateSchulderCreateOrUpdateViewModel</code>.
   * ثبت اطلاعات زمانبندی قالب فاکتور
   * @alias module:model/InvoiceTemplateSchulderCreateOrUpdateViewModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InvoiceTemplateSchulderCreateOrUpdateViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceTemplateSchulderCreateOrUpdateViewModel} obj Optional instance to populate.
   * @return {module:model/InvoiceTemplateSchulderCreateOrUpdateViewModel} The populated <code>InvoiceTemplateSchulderCreateOrUpdateViewModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('repeat'))
        obj.repeat = ApiClient.convertToType(data['repeat'], 'Number');
      if (data.hasOwnProperty('schulderType'))
        obj.schulderType = ApiClient.convertToType(data['schulderType'], 'Number');
      if (data.hasOwnProperty('dueType'))
        obj.dueType = ApiClient.convertToType(data['dueType'], 'Number');
      if (data.hasOwnProperty('endValue'))
        obj.endValue = ApiClient.convertToType(data['endValue'], 'String');
      if (data.hasOwnProperty('dueDateAfterHowManyDay'))
        obj.dueDateAfterHowManyDay = ApiClient.convertToType(data['dueDateAfterHowManyDay'], 'Number');
    }
    return obj;
  }

  /**
   * Allowed values for the <code>schulderType</code> property.
   * @enum {Number}
   * @readonly
   */
  var SchulderTypeEnum = {
    _0: 0, // روزانه
    _1: 1, // هفتگی
    _2: 2, // ماهانه
    _3: 3  // سالانه
  };

  /**
   * Allowed values for the <code>dueType</code> property.
   * @enum {Number}
   * @readonly
   */
  var DueTypeEnum = {
    _0: 0, // پس از ساخت X فاکتور
    _1: 1, // پایان دادن به ساخت فاکتور در تاریخ X
    _2: 2  // ساخت نامحدود فاکتور
  };

  /**
   * تکرار در هر X روز/هفته/ماه/سال
   * @member {Number} repeat
   * @default 1
   */
  exports.prototype.repeat = 1;

  /**
   * نوع زمانبندی:  0 = روزانه  1 = هفتگی  2 = ماهانه  3 = سالانه
   * @member {module:model/InvoiceTemplateSchulderCreateOrUpdateViewModel.SchulderTypeEnum} schulderType
   * @default SchulderTypeEnum._0
   */
  exports.prototype.schulderType = SchulderTypeEnum._0;

  /**
   * نوع پایان زمانبندی:  0 = پس از ساخت X فاکتور  1 = پایان دادن به ساخت فاکتور در تاریخ X  2 = ساخت نامحدود فاکتور
   * @member {module:model/InvoiceTemplateSchulderCreateOrUpdateViewModel.DueTypeEnum} dueType
   * @default DueTypeEnum._0
   */
  exports.prototype.dueType = DueTypeEnum._0;

  /**
   * تعداد/تاریخ پایان، تولید فاکتور
   * @member {String} endValue
   * @default '1'
   */
  exports.prototype.endValue = '1';

  /**
   * سررسید بعد از X روز
   * @member {Number} dueDateAfterHowManyDay
   * @default 2
   */
  exports.prototype.dueDateAfterHowManyDay = 2;

  return exports;

}));
