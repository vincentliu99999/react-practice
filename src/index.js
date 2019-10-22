import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Values } from "redux-form-website-template";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './component/ReduxForm/store';
import showResults from './component/ReduxForm/showResults';
// eslint-disable-next-line no-unused-vars
import SimpleForm from './component/ReduxForm/SimpleForm';
import FieldLevelValidationForm from './component/ReduxForm/FieldLevelValidationForm';
import './index.css';
import App from './App';
import HelloTo from './component/HelloTo';
import AlarmClockControl from './component/AlarmClockControl';
import Toggle from './component/Toggle';
import Form from './component/Form';
import EssayForm from './component/EssayForm';
import FlavorForm from './component/FlavorForm';
import CssStyle from './component/CssStyle';
import BootstrapBtn from './component/BootstrapBtn';
import PropType from './component/PropType';
import ErrorBoundary from './component/ErrorBoundary';
import ErrorCounter from './component/ErrorCounter';
import StateDiff from './component/StateDiff';
import Fetch from './component/Fetch';
import Axios from './component/Axios';
import Calculator from './component/state/Calculator';
import FilterableProductTable from './component/FilterableProductTable';
import AccordionEx from './component/sanfona/AccordionEx';
import FormikBasic from './component/formik/Basic';
import FormikForm from './component/formik/Form';
import AntdModal from './component/antd/AntdModal';
import * as serviceWorker from './serviceWorker';

const About = () => (
  <div>
    <h2>About</h2>
    this is function component!
  </div>
);

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <ListItem
      key={number.toString()} // there will be warning in console if you don't specify key to list
      value={number}
    />
  ));
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = ['footer1', 'footer2', 'footer3'];

const Error = () => (
  <div>
    <ErrorBoundary>
      <ErrorCounter />
    </ErrorBoundary>
    <ErrorBoundary>
      <ErrorCounter action="handleClick" />
    </ErrorBoundary>
  </div>
);

const AjaxEx = () => (
  <div>
    <h1>Fetch</h1>
    <Fetch />
    <h1>Axios</h1>
    <Axios />
  </div>
);

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome, Vicnent</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome, Vicnent2</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
    </div>
  );
}

const PRODUCTS = [
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
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloGroup />, document.getElementById('root'));
// ReactDOM.render(<AlarmClockControl />, document.getElementById("root"));

const initial = {
  address: 'address',
  identity: 'identity',
  invoice: 'invoice',
  email: 'email',
};
ReactDOM.render(
  <Provider store={store}>
    {/* <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div> */}
    <Router>
      <div>
        <ul>
          <li><Link to="/react-practice/">App</Link></li>
          <li><Link to="/react-practice/about">About</Link></li>
          <li>
            <Link to={{
              pathname: '/react-practice/hello',
              state: { id: '1', message: 'hello, component' }
            }}
            >Welcome
            </Link>
          </li>
          <li><Link to="/react-practice/form">Form</Link></li>
          <li><Link to="/react-practice/essayform">EssayForm</Link></li>
          <li><Link to="/react-practice/flavorform">FlavorForm</Link></li>
          <li><Link to="/react-practice/alarmClockControl">AlarmClockControl</Link></li>
          <li><Link to="/react-practice/toggle">Toggle</Link></li>
          <li><Link to="/react-practice/cssStyle">CssStyle</Link></li>
          <li><Link to="/react-practice/bootstrap">BootstrapBtn</Link></li>
          <li><Link to="/react-practice/propType">PropType</Link></li>
          <li><Link to="/react-practice/error">Error Boundaries</Link></li>
          <li><Link to="/react-practice/stateDiff">StateDiff</Link></li>
          <li><Link to="/react-practice/AjaxEx">AjaxEx</Link></li>
          <li><Link to="/react-practice/Calculator">Calculator</Link></li>
          <li><Link to="/react-practice/WelcomeDialog">WelcomeDialog</Link></li>
          <li><Link to="/react-practice/FilterableProductTable">FilterableProductTable</Link></li>
          <li><Link to="/react-practice/AccordionEx">AccordionEx</Link></li>
          <li><Link to="/react-practice/formik-basic">Formik Basic</Link></li>
          <li><Link to="/react-practice/formik-form">Formik From</Link></li>
          <li><Link to="/react-practice/redux-form">Redux Form</Link></li>
          <li><Link to="/react-practice/antd-modal">Antd Modal</Link></li>
        </ul>
        <hr />
        <Route exact path="/react-practice/" component={App} />
        <Route path="/react-practice/about" component={About} />
        <Route path="/react-practice/hello" render={props => <HelloTo name="joe" gender="MR." {...props} />} />
        <Route path="/react-practice/form" component={Form} />
        <Route path="/react-practice/essayform" component={EssayForm} />
        <Route path="/react-practice/flavorform" component={FlavorForm} />
        <Route path="/react-practice/alarmClockControl" component={AlarmClockControl} />
        <Route path="/react-practice/toggle" component={Toggle} />
        <Route path="/react-practice/cssStyle" component={CssStyle} />
        <Route path="/react-practice/bootstrap" component={BootstrapBtn} />
        {/* eslint-disable-next-line no-unused-vars */}
        <Route path="/react-practice/propType" render={props => <PropType name={12345} age="23" gender="superman" />} />
        <Route path="/react-practice/error" component={Error} />
        <Route path="/react-practice/stateDiff" component={StateDiff} />
        <Route path="/react-practice/AjaxEx" component={AjaxEx} />
        <Route path="/react-practice/Calculator" component={Calculator} />
        <Route path="/react-practice/WelcomeDialog" component={WelcomeDialog} />
        <Route path="/react-practice/AccordionEx" component={AccordionEx} />
        <Route
          path="/react-practice/FilterableProductTable"
          render={props => <FilterableProductTable products={PRODUCTS} {...props} />}
        />
        <Route path="/react-practice/formik-basic" component={FormikBasic} />
        <Route path="/react-practice/formik-form" component={FormikForm} />
        <Route
          path="/react-practice/redux-form"
          render={props => <FieldLevelValidationForm onSubmit={showResults} initialValues={initial} {...props} />}
        />
        <Route
          path="/react-practice/antd-modal"
          // component={AntdModal}
          render={props => <AntdModal something="something" {...props} />}
        />
        <NumberList numbers={numbers} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
