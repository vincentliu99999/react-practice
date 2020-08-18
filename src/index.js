import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Values } from "redux-form-website-template";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './components/ReduxForm/store';
import showResults from './components/ReduxForm/showResults';
// eslint-disable-next-line no-unused-vars
import SimpleForm from './components/ReduxForm/SimpleForm';
import FieldLevelValidationForm from './components/ReduxForm/FieldLevelValidationForm';
import './index.css';
import App from './App';
import HelloTo from './components/common/HelloTo';
import AlarmClockControl from './components/common/AlarmClockControl';
import Toggle from './components/common/Toggle';
import Form from './components/common/Form';
import EssayForm from './components/common/EssayForm';
import FlavorForm from './components/common/FlavorForm';
import CssStyle from './components/common/CssStyle';
import BootstrapBtn from './components/common/BootstrapBtn';
import PropType from './components/common/PropType';
import ErrorBoundary from './components/common/ErrorBoundary';
import ErrorCounter from './components/common/ErrorCounter';
import StateDiff from './components/common/StateDiff';
import Fetch from './components/common/Fetch';
import Axios from './components/common/Axios';
import Calculator from './components/state/Calculator';
import FilterableProductTable from './components/common/FilterableProductTable';
import AccordionEx from './components/sanfona/AccordionEx';
import FormikBasic from './components/formik/Basic';
import FormikForm from './components/formik/Form';
import AntdModal from './components/antd/AntdModal';
import AntdDate from './components/antd/AntdDate';
import Example from './components/hook/Example';
import * as serviceWorker from './serviceWorker';
/** @module index */
/** @namespace */
let chat = {
  /**
   * Refer to this by {@link chat."#channel"}.
   * @namespace
   */
  '#channel': {
    /**
       * Refer to this by {@link chat."#channel".open}.
       * @type {boolean}
       * @defaultvalue
       */
    open: true,
    /**
       * Internal quotes have to be escaped by backslash. This is
       * {@link chat."#channel"."say-\"hello\""}.
       */
    'say-"hello"': function (msg) {}
  }
};

console.log(chat);
/**
 * Now we define an event in our {@link chat."#channel"} namespace.
 * @event chat."#channel"."op:announce-motd"
 */

/**
 * About {@link chat."#channel"}
 */
const About = () => (
  <div>
    <h2>About</h2>
    this is function component!
  </div>
);

/**
 * return full name of the user
 * @param   {string} firstName  First Name of the User
 * @param   {string} lastName   Last Name of the User
 * @return  {string}            Fullname of the user
*/
/**
 * list item
 * @param {Object} props
 */
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
          <li><Link to="/react-practice/antd-date">Antd Date</Link></li>
          <li><Link to="/react-practice/hook/example">Hook - Example</Link></li>
        </ul>
        <hr />
        <Route exact strict path="/react-practice/" component={App} />
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
          render={props => <FilterableProductTable products={products} {...props} />}
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
        <Route
          path="/react-practice/antd-date"
          // component={AntdModal}
          render={props => <AntdDate something="something" {...props} />}
        />
        <Route path="/react-practice/hook/example" component={Example} />
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
