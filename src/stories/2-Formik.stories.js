import React from 'react';
import Form from '../component/formik/Form';
import Basic from '../component/formik/Basic';
import 'antd/dist/antd.css';

export default {
  component: Basic,
  title: 'Formik',
};

export const FormikBasic = () => <Basic />;

export const FormikForm = () => <Form />;
