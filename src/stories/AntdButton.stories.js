import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  select,
  radios,
} from '@storybook/addon-knobs';
import { Button } from 'antd';
import markdown from './Antd.md';

export default {
  component: ButtonWithKnobs,
  title: 'Design System|Ant Design/Button',
  parameters: { notes: markdown },
};


export const ButtonWithKnobs = () => {
  const disabled = boolean('disabled', false);
  const ghost = boolean('ghost', false);
  const buttonLoading = boolean('loading', false);
  const buttonText = text('buttonText', 'Hello Button');
  const sizeOptions = ['large', 'middle', 'small'];
  const size = select('size', sizeOptions, 'middle');
  const typeOptions = ['primary', 'ghost', 'dashed', 'danger', 'link', 'terxt'];
  const type = radios('type', typeOptions, 'primary');
  const block = boolean('block', false);
  const danger = boolean('danger', false);

  return (
    <Button
      disabled={disabled}
      ghost={ghost}
      loading={buttonLoading}
      size={size}
      type={type}
      onClick={action('clicked')}
      block={block}
      danger={danger}
    >
      {buttonText}
    </Button>
  );
};
