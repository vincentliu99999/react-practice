import React from 'react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { message, Button } from 'antd';
import Date from '../components/antd/AntdDate';
import Modal from '../components/antd/AntdModal';

export default {
  component: Date,
  title: 'Ant Design',
};

export const antdDate = () => <Date />;

const defaultValue = {
  something: 'red',
};
const value = object('something', defaultValue);

export const antdModal = () => <Modal {...value} />;

export const antdMessage = () => (
  <>
    <Button
      type="primary"
      shape="round"
      onClick={(e) => {
        action('click')(e);
        success();
      }}
    >
      Display success message
    </Button>
    <Button type="ghost" shape="round" onClick={error}>
      Display error message
    </Button>
    <Button type="dashed" shape="round" onClick={info}>
      Display normal message
    </Button>
    <Button type="danger" shape="round" onClick={warning}>
      Display warning message
    </Button>
    <Button type="link" shape="round" onClick={warn}>
      Display warn message
    </Button>
    <Button type="text" shape="round" onClick={loading}>
      Display loading message
    </Button>
  </>
);

const success = () => {
  action('clicked');
  message.success('This is a success message');
};

const error = () => {
  action('clicked');
  message.error('This is a error message');
};

const info = () => {
  action('clicked');
  message.info('This is a normal message');
};

const warning = () => {
  action('clicked');
  message.warning('This is a warning message');
};

const warn = () => {
  action('clicked');
  message.warn('This is a warn message');
};

const loading = () => {
  action('clicked');
  message.loading('This is a normal message');
};