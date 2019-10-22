/* eslint-disable no-unused-vars */
import React from 'react';
import Joi from '@hapi/joi';
import { Field, reduxForm } from 'redux-form';
import {
  RadioField, SelectField, TextField, CheckboxField
} from 'redux-form-antd';
import createValidator from './joi_redux_form.js';
import {
  sexSchema, addressSchema, identitySchema, invoiceSchema, emailSchema, cellphoneSchema, telAreaSchema, telSchema, roleTypeSchema, specSchema
} from '../../util/joiSchema';
import { sexs, roleTypes } from './options';

export const joiRule = Joi.object().keys({
  sex: sexSchema,
  // birthday: birthdaySchema,
  // area: areaSchema,
  address: addressSchema,
  identity: identitySchema,
  invoice: invoiceSchema,
  email: emailSchema,
  cellphone: cellphoneSchema,
  telArea: telAreaSchema,
  tel: telSchema,
  // roleType: roleTypeSchema,
  // spec: specSchema,
}).or('identity', 'invoice');

const FieldLevelValidationForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name="sex" component={RadioField} options={sexs} /></div>
      <Field name="address" component={TextField} placeholder="請輸入地址" />
      <Field name="identity" component={TextField} placeholder="請輸入身份證/護照號碼" />
      <Field name="invoice" component={TextField} placeholder="請輸入公司統一編號" />
      <Field name="email" component={TextField} placeholder="請輸入電子信箱" />
      <Field name="telArea" component={TextField} placeholder="電話區碼" />
      <Field name="tel" component={TextField} placeholder="請輸入電話" />
      <Field name="cellphone" component={TextField} placeholder="請輸入行動電話" />
      <Field name="spec" id="spec" component={CheckboxField} value="true">已詳細閱讀並接受上述 <a href="#top">保證金規範     </a></Field>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  enableReinitialize: true,
  validate: createValidator(joiRule),
})(FieldLevelValidationForm);
