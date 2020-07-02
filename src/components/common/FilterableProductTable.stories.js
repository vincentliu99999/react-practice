import React from 'react';
import { object } from '@storybook/addon-knobs';
import FilterableProductTable from './FilterableProductTable';

export default {
  title: 'Common',
  component: FilterableProductTable,
};


const products = [
  {
    category: '食物', price: '$49.99', stocked: true, name: '雞排'
  },
  {
    category: '食物', price: '$9.99', stocked: true, name: '珍奶'
  },
  {
    category: '食物', price: '$29.99', stocked: false, name: '飯'
  },
  {
    category: '3C', price: '$99.99', stocked: true, name: 'iPod Touch'
  },
  {
    category: '3C', price: '$399.99', stocked: false, name: '哀鳳 5'
  },
  {
    category: '3C', price: '$199.99', stocked: true, name: 'Nexus 7'
  }
];

export const FilterableProductTableUI = () => {
  const value = object('value', products);
  return <FilterableProductTable products={value} />;
};

export const DefaultFilterableProductTableUI = () => {
  return <FilterableProductTable />;
};
