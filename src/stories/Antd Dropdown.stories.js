import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  // text,
  select,
  // radios,
} from '@storybook/addon-knobs';
import { Menu, Dropdown } from 'antd';
import markdown from './Antd.md';

export default {
  component: DropdownWithClickWithKnobs,
  title: 'Design System|Ant Design/Dropdown',
  parameters: { notes: markdown },
};

export const DropdownWithClickWithKnobs = () => {
  // const arrow = boolean('arrow', true);
  const disabled = boolean('disabled', false);
  const sizeOptions = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
  const placement = select('placement', sizeOptions, 'bottomLeft');
  // const visible = boolean('visible', false);
  const onVisibleChange = action('onVisibleChange');
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      // arrow={arrow}
      disabled={disabled}
      placement={placement}
      // visible={visible}
      onVisibleChange={onVisibleChange}
      overlay={menu}
      trigger={['click']}
    >
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me
      </a>
    </Dropdown>
  );
};
