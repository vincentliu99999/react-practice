import React, { Component } from 'react';
import { Input } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Debug } from './Debug';

class FormikForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCellphoneEmpty: false,
    };
  }

  handleNameChange = e => {
    console.log(e.target.value);
    const name = e.target.value;
    console.log(`handleNameChange: ${name}`);
  }

  handleCellphoneChange = setFieldValue => e => {
    const cellphone = e.target.value;
    console.log(`handleCellphoneChange: ${cellphone}`);
    setFieldValue('cellphone', cellphone);

    this.setState({
      isCellphoneEmpty: cellphone === '',
    })
  }

  renderForm = (props) => {
    console.log(props);
    const {
      setFieldValue
    } = props;
    const {
      name,
      cellphone,
    } = props.values;

    console.log(`renderForm - name: ${name} isNameEmpty: ${name === ''}, cellphon: ${cellphone}`);

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
        <button type="submit">Submit</button>
        <Debug />
      </form>
    );
  }

  render() {
    const initVal = {
      name: '',
      cellphone: ''
    };

    const validateProfile = yup.object().shape({
      name: yup.string()
        .required('請填寫正確姓名'),
      cellphone: yup.string()
        .required('請填寫正確行動電話')
        .matches(/^[+]?[0-9]{10,15}$/, { message: '請填寫正確行動電話' }),
    });

    return (
      <div>
        <Formik
          initialValues={initVal}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          validationSchema={validateProfile}
          render={this.renderForm}
        />
      </div>
    );
  }
}

export default FormikForm;
