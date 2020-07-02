import React from 'react';
import {
  text, number
} from '@storybook/addon-knobs';
import PropType from './PropType';

export default {
  title: 'Common',
  component: PropType,
};

export const PropTypeUI = () => {
  const name = text('Name', 'James');
  const options = {
    range: true,
    min: 35,
    max: 90,
    step: 1,
  };
  const age = number('Age', 35, options);
  const gender = text('Gender', 'superman');

  return <PropType name={name} age={age} gender={gender} />;
};
