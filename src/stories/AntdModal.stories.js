import React from 'react';
import {
  object,
} from '@storybook/addon-knobs';
import Modal from '../components/antd/AntdModal';
import markdown from './Antd.md';

export default {
  component: MultipleModal,
  title: 'Design System|Ant Design/Modal',
  parameters: { notes: markdown },
};

export const MultipleModal = () => {
  const defaultValue = {
    something: 'red',
  };
  const value = object('something', defaultValue);

  return <Modal {...value} />;
};
