import React from 'react';
import { Input } from 'antd';
import { Formik, Field, Form } from 'formik';
import { Debug } from './Debug';

const FormikBasic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        invoice: '',
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />

          <label htmlFor="invoice">Invoice</label>
          <Field
            name="invoice"
            render={({ field }) => (
              <Input id="invoice" {...field} placeholder="invoice" />
            )}
          />
          <button type="submit">Submit</button>
          <Debug />
        </Form>
      )}
    />
  </div>
);

export default FormikBasic;
