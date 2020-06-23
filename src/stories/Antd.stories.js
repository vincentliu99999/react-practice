import React from 'react';
import { message, Button } from 'antd';
import Date from '../component/antd/AntdDate';
import Modal from '../component/antd/AntdModal';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is a error message');
};

const info = () => {
  message.info('This is a normal message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const warn = () => {
  message.warn('This is a warn message');
};

const loading = () => {
  message.loading('This is a normal message');
};

export default {
  component: Date,
  title: 'Ant Design',
};

export const antdDate = () => <Date />;

export const antdModal = () => <Modal />;

export const antdMessage = () => (
  <>
    <Button type="primary" shape="round" onClick={success}>
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
