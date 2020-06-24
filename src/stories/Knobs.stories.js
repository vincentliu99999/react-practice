import React from 'react';
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs';

export default {
  title: 'Knobs',
  decorators: [withKnobs] // add knobs support
};
// You can also configure `withKnobs` as a global decorator.

// boolean, text
export const withAButton = () => (
  <button type="button" disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
);

// text, number, color
export const asDynamicVariables = () => {
  const name = text('Name', 'James');
  const options = {
    range: true,
    min: 35,
    max: 90,
    step: 1,
  };
  const age = number('Age', 35, options);
  const content = `I am ${name} and I'm ${age} years old.`;

  const backgroundColor = color('Color', '#ff00ff');
  const style = {
    'background-color': backgroundColor,
  };

  return <div style={style}>{content}</div>;
};
