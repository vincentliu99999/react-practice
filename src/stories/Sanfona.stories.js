import React from 'react';
import {
  withKnobs,
} from '@storybook/addon-knobs';
import AccordionEx from '../components/sanfona/AccordionEx';

export default {
  title: 'Sanfona',
  decorators: [withKnobs] // add knobs support
};
// You can also configure `withKnobs` as a global decorator.

export const AccordionExUI = () => {
  return <AccordionEx />;
};
