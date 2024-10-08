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
    root._.PermanentCreateViewModel = factory(root._.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PermanentCreateViewModel model module.
   * @module model/PermanentCreateViewModel
   * @version v1
   */

  /**
   * Constructs a new <code>PermanentCreateViewModel</code>.
   * @alias module:model/PermanentCreateViewModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PermanentCreateViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermanentCreateViewModel} obj Optional instance to populate.
   * @return {module:model/PermanentCreateViewModel} The populated <code>PermanentCreateViewModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('redirectPage'))
        obj.redirectPage = ApiClient.convertToType(data['redirectPage'], 'String');
      if (data.hasOwnProperty('getAddress'))
        obj.getAddress = ApiClient.convertToType(data['getAddress'], 'Boolean');
      if (data.hasOwnProperty('mailerLiteListId'))
        obj.mailerLiteListId = ApiClient.convertToType(data['mailerLiteListId'], 'String');
      if (data.hasOwnProperty('smsText'))
        obj.smsText = ApiClient.convertToType(data['smsText'], 'String');
      if (data.hasOwnProperty('customDescriptionText'))
        obj.customDescriptionText = ApiClient.convertToType(data['customDescriptionText'], 'String');
      if (data.hasOwnProperty('emailOption'))
        obj.emailOption = ApiClient.convertToType(data['emailOption'], 'Number');
      if (data.hasOwnProperty('phoneOption'))
        obj.phoneOption = ApiClient.convertToType(data['phoneOption'], 'Number');
      if (data.hasOwnProperty('nameOption'))
        obj.nameOption = ApiClient.convertToType(data['nameOption'], 'Number');
      if (data.hasOwnProperty('customDesOption'))
        obj.customDesOption = ApiClient.convertToType(data['customDesOption'], 'Number');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientRefId'))
        obj.clientRefId = ApiClient.convertToType(data['clientRefId'], 'String');
      if (data.hasOwnProperty('permanentType'))
        obj.permanentType = ApiClient.convertToType(data['permanentType'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} redirectPage
   */
  exports.prototype.redirectPage = undefined;

  /**
   * @member {Boolean} getAddress
   */
  exports.prototype.getAddress = undefined;

  /**
   * @member {String} mailerLiteListId
   */
  exports.prototype.mailerLiteListId = undefined;

  /**
   * @member {String} smsText
   */
  exports.prototype.smsText = undefined;

  /**
   * @member {String} customDescriptionText
   */
  exports.prototype.customDescriptionText = undefined;

  /**
   * @member {module:model/PermanentCreateViewModel.EmailOptionEnum} emailOption
   */
  exports.prototype.emailOption = undefined;

  /**
   * @member {module:model/PermanentCreateViewModel.PhoneOptionEnum} phoneOption
   */
  exports.prototype.phoneOption = undefined;

  /**
   * @member {module:model/PermanentCreateViewModel.NameOptionEnum} nameOption
   */
  exports.prototype.nameOption = undefined;

  /**
   * @member {module:model/PermanentCreateViewModel.CustomDesOptionEnum} customDesOption
   */
  exports.prototype.customDesOption = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {String} clientRefId
   */
  exports.prototype.clientRefId = undefined;

  /**
   * @member {module:model/PermanentCreateViewModel.PermanentTypeEnum} permanentType
   */
  exports.prototype.permanentType = undefined;



  /**
   * Allowed values for the <code>emailOption</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.EmailOptionEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2
  };


  /**
   * Allowed values for the <code>phoneOption</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.PhoneOptionEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2
  };


  /**
   * Allowed values for the <code>nameOption</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.NameOptionEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2
  };


  /**
   * Allowed values for the <code>customDesOption</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.CustomDesOptionEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2
  };


  /**
   * Allowed values for the <code>permanentType</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.PermanentTypeEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1
  };

  return exports;

}));
