const Joi = require('@hapi/joi');

// 長度限制
const LENGTH = {
  MAX_ADDRESS: 120,
  MAX_PASSPORT: 15,
  MIN_TEL: 5,
  MAX_TEL: 20,
};

// 範圍限制
const RANGE = {
  ROLE_TYPE: {
    FROM: 1,
    TO: 9,
  },
};

// Joi Schema
const SCHEMA = {
  COMMON: {
    invalidStringSchema: Joi.any().invalid('create ', 'delete ', 'update ', 'insert ', 'embed ', 'script ', 'alert '),
    disallowHtmlEntitySchema: Joi.string().regex(/&#[0-9]+;/, { invert: true }),
    disallowNumberSchema: Joi.string().regex(/\d/, { invert: true }),
    disallowNewlingSchema: Joi.string().regex(/\r\n/, { invert: true }),
    disallowTabSchema: Joi.string().regex(/\t/, { invert: true }),
    requireNumberSchema: Joi.string().regex(/\d/),
    allowEmptyStringSchema: Joi.string().valid(''),
  },
  BASIC: {
    sexOptionSchema: Joi.string().valid('0', '1'),
    birthdayFormatSchema: Joi.string().regex(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, 'birthday'),
    areaFormatSchema: Joi.string().regex(/6[0-9]{6}000/, { invert: true }),
    identityFormatSchema: Joi.string().regex(/^[a-zA-Z][0-9]{9}$/, 'identity'),
    invoiceFormatSchema: Joi.string().regex(/^\d{8}$/, 'invoice'),
    emailFormatSchema: Joi.string().regex(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,})$/, 'email'),
    cellphoneFormatSchema: Joi.string().regex(/^[+]?[0-9]{10,15}$/, 'cellphone'),
    telAreaFormatSchema: Joi.string().regex(/^\d{1,5}$/, 'telArea'),
    telFormatSchema: Joi.string().min(LENGTH.MIN_TEL).max(LENGTH.MAX_TEL).regex(/^([0-9]+)(?:(?:#)([0-9]+))?$/, 'tel'),
  }
};

export const sexSchema = Joi.string().optional()
  .concat(SCHEMA.BASIC.sexOptionSchema)
  // eslint-disable-next-line no-unused-vars
  .error((errors) => { // any.empty, any.allowOnly
    return '請選擇性別';
  })
  .label('性別');

export const birthdaySchema = Joi.string()
  .concat(SCHEMA.BASIC.birthdayFormatSchema)
  .error((errors) => {
    return errors.map((error) => { // any.empty, string.regex.base
      console.log(error.code);

      if (error.code === 'any.empty') {
        return '請輸入日期';
      }

      return '請輸入正確日期';
    });
  })
  .label('生日');

export const areaSchema = Joi.string()
  .concat(SCHEMA.BASIC.areaFormatSchema)
  // eslint-disable-next-line no-unused-vars
  .error((errors) => { // any.empty, string.regex.base
    return '請填寫正確地區';
  })
  .label('地區');

export const addressSchema = Joi.string().max(LENGTH.MAX_ADDRESS)
  .concat(SCHEMA.COMMON.invalidStringSchema)
  .concat(SCHEMA.COMMON.disallowHtmlEntitySchema)
  .concat(SCHEMA.COMMON.disallowNumberSchema)
  .error((errors) => { // string.max, any.invalid, string.regex.invert.base
    console.log(errors[0]);
    return '請填寫正確地址';
  })
  .label('地址');

export const identitySchema = Joi.alternatives().try([
  Joi.string().allow('').concat(SCHEMA.BASIC.identityFormatSchema),
  Joi.string().allow('').max(LENGTH.MAX_PASSPORT)
    .concat(SCHEMA.COMMON.invalidStringSchema)
    .concat(SCHEMA.COMMON.disallowHtmlEntitySchema)
    .concat(SCHEMA.COMMON.requireNumberSchema)
    .concat(SCHEMA.COMMON.disallowNewlingSchema)
    .concat(SCHEMA.COMMON.disallowTabSchema)
])
  .error((errors) => { // string.max, string.regex.base, alternatives.match, any.allowOnly
    console.log(errors[0]);
    return '請填寫正確身份證字號 / 護照號碼';
  })
  .label('身分證');

export const invoiceSchema = Joi.string().allow('').concat(SCHEMA.BASIC.invoiceFormatSchema)
  .error((errors) => { // string.max, string.regex.base, any.allowOnly
    console.log(errors[0]);
    return '請填寫正確統一編號';
  })
  .label('統一編號');

export const emailSchema = Joi.string().concat(SCHEMA.BASIC.emailFormatSchema)
  .error((errors) => { // string.max, any.invalid, string.regex.invert.base
    console.log(errors[0]);

    return '請填寫正確電子信箱';
  })
  .label('電子信箱');

export const cellphoneSchema = Joi.string().concat(SCHEMA.BASIC.cellphoneFormatSchema)
  .error((errors) => { // string.max, any.invalid, string.regex.invert.base
    console.log(errors[0]);

    return '請填寫正確行動電話';
  })
  .label('正確行動電話');

export const telAreaSchema = Joi.when('tel', {
  is: '',
  then: SCHEMA.COMMON.allowEmptyStringSchema,
  otherwise: SCHEMA.BASIC.telAreaFormatSchema
}).error((errors) => { // any.empty, string.regex.name
  console.log(errors[0]);
  return '請填寫正確區碼';
})
.label('區碼');

export const telSchema = SCHEMA.BASIC.telFormatSchema.error((errors) => { // any.empty, string.min, string.max, string.regex.name
  console.log(errors[0]);
  return '請填寫正確電話號碼';
})
.label('電話號碼');

export const roleTypeSchema = Joi.number().min(RANGE.ROLE_TYPE.FROM).max(RANGE.ROLE_TYPE.TO)
  .error((errors) => { // number.base, number.min, number.max
    console.log(errors[0]);
    return '請選擇身分類別';
  })
  .label('身分類別');

export const specSchema = Joi.boolean().valid(true).required()
  .error(() => '請勾選接受保證金規範')
  .label('保證金規範');
