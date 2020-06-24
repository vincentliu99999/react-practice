import React, { Component } from 'react';
import { Input, Radio, DatePicker } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import * as yup from 'yup';
import { Debug } from './Debug';

const location = [
  {
    label: '是',
    value: 'yes'
  },
  {
    label: '否',
    value: 'no'
  }
];

class FormikForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCellphoneEmpty: false,
      init: {
        name: 'init',
        cellphone: '0988',
        code: {
          no: 123,
          text: 'text'
        },
        date: moment(),
        test: {
          vincent: 'vincent',
        }
      }
    };
  }

  componentDidMount = () => {
    console.log('componentDidMount - FormikForm');
    setTimeout(() => {
      this.setState({
        init: {
          name: 'init2',
          cellphone: '0988',
          code: {
            no: 456,
            text: 'text2'
          },
          date: moment(),
        }
      });
    }, 5000);
  }

  handleNameChange = (e) => {
    console.log(e.target.value);
    const name = e.target.value;
    console.log(`handleNameChange: ${name}`);
  }

  handleCellphoneChange = setFieldValue => (e) => {
    const cellphone = e.target.value;
    console.log(`handleCellphoneChange: ${cellphone}`);
    setFieldValue('cellphone', cellphone);

    this.setState({
      isCellphoneEmpty: cellphone === '',
    });
  }

  renderForm = (props) => {
    console.log(props);
    const {
      setFieldValue,
      handleReset,
      values,
    } = props;
    const {
      name,
      cellphone,
      code,
    } = props.values;

    const { no, text } = code;

    console.log(`renderForm - name: ${name} isNameEmpty: ${name === ''}, cellphon: ${cellphone}`);
    console.log(`no: ${no}, text: ${text}`);

    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={this.handleNameChange} />
        <ErrorMessage name="name">{msg => <span>{msg}</span>}</ErrorMessage>
        <Field
          name="cellphone"
          render={({ field }) => (
            <Input id="cellphone" {...field} placeholder="cellphone" onChange={this.handleCellphoneChange(setFieldValue)} />
          )}
        />
        <ErrorMessage name="cellphone">{msg => <span>{msg}</span>}</ErrorMessage>

        {/* To access nested objects or arrays, name can also accept lodash-like dot path like social.facebook or friends[0].firstName */}
        {/* https://jaredpalmer.com/formik/docs/guides/arrays#nested-objects */}
        <div>
          <Field
            name="placeType"
            render={({ field }) => (
              <Radio.Group {...field} options={location} />
            )}
          />
        </div>

        <ErrorMessage name="placeType">{msg => <span>{msg}</span>}</ErrorMessage>

        <Field name="code.no" />
        <ErrorMessage name="code.no">{msg => <span>{msg}</span>}</ErrorMessage>

        <Field name="code.text" />
        <ErrorMessage name="code.text">{msg => <span>{msg}</span>}</ErrorMessage>

        <DatePicker
          name="date"
          onChange={(date, dateString) => setFieldValue('date', dateString)
      }
          value={values.date !== '' ? moment(values.date) : null}
        />

        <button type="button" onClick={handleReset}>reset</button>
        <button type="submit">Submit</button>
        <Debug />
      </form>
    );
  }

  render() {
    const {
      isCellphoneEmpty,
      init
    } = this.state;
    const initVal = {
      name: '',
      cellphone: '',
      code: {
        no: 123,
        text: 'text'
      },
      date: moment(),
    };

    console.log(init);
    console.log(initVal);


    let validateProfile;

    console.log(`isCellphoneEmpty: ${isCellphoneEmpty}`);

    let validateCellphone = yup.object().shape({
      cellphone: yup.string()
        .required('請填寫正確行動電話')
        .matches(/^[+]?[0-9]{10,15}$/, { message: '請填寫正確行動電話' }),
    });

    let validateName = yup.object().shape({
      name: yup.string()
        .required('請填寫正確姓名'),
    });

    if (!isCellphoneEmpty) {
      validateProfile = validateCellphone.concat(validateName);
    } else {
      validateProfile = validateCellphone;
    }

    let validatePlaceType = yup.object().shape({
      placeType: yup.string()
        .required('請填寫 PlaceType'),
    });

    validateProfile = validateProfile.concat(validatePlaceType);

    let validateCode = yup.object({
      code: yup.object().when('placeType', {
        is: 'yes',
        then: yup.object({
          no: yup.number()
            .required('請選擇 no')
            .typeError('請選擇 no'),
          text: yup.string()
            .required('請選擇text')
            .typeError('請選擇text')
        })
      })
    });

    validateProfile = validateProfile.concat(validateCode);

    console.log(validateProfile);

    console.log(this.state.init);

    return (
      <div>
        <Formik
          initialValues={init}
          onSubmit={(values) => {
            setTimeout(() => {
              // eslint-disable-next-line no-alert
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          validationSchema={validateProfile}
          render={this.renderForm}
          enableReinitialize={true}
        />
      </div>
    );
  }
}

export default FormikForm;
