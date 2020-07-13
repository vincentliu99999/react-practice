import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Sample|Storybook/Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Sample|Storybook/Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
