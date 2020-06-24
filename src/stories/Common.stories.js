import React from 'react';
import {
  withKnobs, text, boolean, number, array
} from '@storybook/addon-knobs';
import FilterableProductTable from '../components/common/FilterableProductTable';

export default {
  title: 'Common',
  decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
  <button type="button" disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text('Name', 'James');
  const age = number('Age', 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

const products = [
  {
    category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'
  },
  {
    category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'
  },
  {
    category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'
  },
  {
    category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'
  },
  {
    category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'
  },
  {
    category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'
  }
];

export const table = () => {
  const value = array('value', products);
  return <FilterableProductTable products={value} />;
};
