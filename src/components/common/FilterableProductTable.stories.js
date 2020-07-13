import React from 'react';
import { object } from '@storybook/addon-knobs';
import FilterableProductTable from './FilterableProductTable';

export default {
  title: 'Common',
  component: FilterableProductTable,
};


export const FilterableProductTableUI = () => {
  const products = [
    {
      category: '保健/醫療', price: '$49.99', stocked: false, name: '中衛口罩'
    },
    {
      category: '食物', price: '$49.99', stocked: true, name: '雞排'
    },
    {
      category: '食物', price: '$9.99', stocked: true, name: '珍珠奶茶'
    },
    {
      category: '食物', price: '$29.99', stocked: false, name: '親子丼'
    },
    {
      category: '3C', price: '$99.99', stocked: true, name: 'AirPods'
    },
    {
      category: '3C', price: '$399.99', stocked: false, name: '哀鳳 11'
    },
    {
      category: '3C', price: '$199.99', stocked: true, name: 'Galaxy Note 10+'
    }
  ];
  const value = object('value', products);
  return <FilterableProductTable products={value} />;
};

export const DefaultFilterableProductTableUI = () => {
  return <FilterableProductTable />;
};
