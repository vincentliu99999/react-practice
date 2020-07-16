import React from 'react';
import {
  number, select, boolean, text
} from '@storybook/addon-knobs';
import { Spin, Switch, Alert } from 'antd';
import markdown from './Antd.md';

export default {
  component: Manual,
  title: 'Design System|Ant Design/Spin',
  parameters: { notes: markdown },
};

export const Manual = () => {
  const delay = number('delay', 0);
  const sizeOptions = ['small', 'default', 'large'];
  const size = select('size', sizeOptions, 'default');
  const spinning = boolean('spinning', true);
  const tip = text('tip', 'loading...');

  return (
    <Spin
      delay={delay}
      size={size}
      spinning={spinning}
      tip={tip}
    />
  );
};

export const Embedded = () => {
  const spinning = boolean('spinning', true);

  return (
    <div>
      <Spin spinning={spinning}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch checked={spinning} />
      </div>
    </div>
  );
};
