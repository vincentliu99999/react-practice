import React from 'react';
import {
  withKnobs, array
} from '@storybook/addon-knobs';
import FilterableProductTable from '../components/common/FilterableProductTable';
import AlarmClockControl from '../components/common/AlarmClockControl';
import Axios from '../components/common/Axios';

export default {
  title: 'Common',
  decorators: [withKnobs]
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

export const FilterableProductTableUI = () => {
  const value = array('value', products);
  return <FilterableProductTable products={value} />;
};

export const AlarmClockControlUI = () => {
  return <AlarmClockControl />;
};

export const AxiosUI = () => {
  return <Axios />;
};
