import React from 'react';
import { text } from '@storybook/addon-knobs';
import AlarmClockControl from '../components/common/AlarmClockControl';
import Axios from '../components/common/Axios';
import BootstrapBtn from '../components/common/BootstrapBtn';
import CssStyle from '../components/common/CssStyle';
// import ErrorBoundary from '../components/common/ErrorBoundary';
import ErrorCounter from '../components/common/ErrorCounter';
import EssayForm from '../components/common/EssayForm';
import Fetch from '../components/common/Fetch';
// import FilterableProductTable from '../components/common/FilterableProductTable';
import FlavorForm from '../components/common/FlavorForm';
import Form from '../components/common/Form';
import HelloTo from '../components/common/HelloTo';
// import PropType from '../components/common/PropType';
import StateDiff from '../components/common/StateDiff';
import Toggle from '../components/common/Toggle';
import Calculator from '../components/state/Calculator';

export default {
  title: 'CommonEX',
  // component: PropType,
};

export const AlarmClockControlUI = () => {
  return <AlarmClockControl />;
};

export const AxiosUI = () => {
  return <Axios />;
};

export const BootstrapBtnUI = () => {
  return <BootstrapBtn />;
};

export const CssStyleUI = () => {
  return <CssStyle />;
};

// export const ErrorBoundaryUI = () => {
//   return <ErrorBoundary />;
// };

export const ErrorCounterUI = () => {
  return <ErrorCounter />;
};

export const EssayFormUI = () => {
  return <EssayForm />;
};

export const FetchUI = () => {
  return <Fetch />;
};

// const products = [
//   {
//     category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'
//   },
//   {
//     category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'
//   },
//   {
//     category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'
//   },
//   {
//     category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'
//   },
//   {
//     category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'
//   },
//   {
//     category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'
//   }
// ];

// export const FilterableProductTableUI = () => {
//   const value = array('value', products);
//   return <FilterableProductTable products={value} />;
// };

export const FlavorFormUI = () => {
  return <FlavorForm />;
};

export const FormUI = () => {
  return <Form />;
};

export const HelloToUI = () => {
  const name = text('Name', 'joe');
  const gender = text('Gender', 'MR.');
  return <HelloTo name={name} gender={gender} />;
};

// export const PropTypeUI = () => {
//   const name = text('Name', 'James');
//   const options = {
//     range: true,
//     min: 35,
//     max: 90,
//     step: 1,
//   };
//   const age = number('Age', 35, options);
//   const gender = text('Gender', 'superman');
//   return <PropType name={name} age={age} gender={gender} />;
// };

export const StateDiffUI = () => {
  return <StateDiff />;
};

export const ToggleUI = () => {
  return <Toggle />;
};

export const CalculatorUI = () => {
  return <Calculator />;
};
