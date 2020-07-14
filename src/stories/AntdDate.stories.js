import React from 'react';
import Date from '../components/antd/AntdDate';
import markdown from './Antd.md';

export default {
  component: MultipleDatePicker,
  title: 'Design System|Ant Design/Date',
  parameters: { notes: markdown },
};

export const MultipleDatePicker = () => <Date />;
