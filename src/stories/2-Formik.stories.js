import React from 'react';
import Form from '../components/formik/Form';
import Basic from '../components/formik/Basic';
import 'antd/dist/antd.css';

export default {
  component: Basic,
  title: 'Practice|Form/Formik',
};

export const FormikBasic = () => <Basic />;

export const FormikForm = () => <Form />;
