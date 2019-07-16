import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
import store from "./component/ReduxForm/store";
import showResults from "./component/ReduxForm/showResults";
import SimpleForm from "./component/ReduxForm/SimpleForm";
import FieldLevelValidationForm from "./component/ReduxForm/FieldLevelValidationForm";
import "./index.css";
import App from "./App";
import HelloTo from "./component/HelloTo";
import AlarmClockControl from "./component/AlarmClockControl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./component/Form";
import EssayForm from "./component/EssayForm";
import FlavorForm from "./component/FlavorForm";
import CssStyle from "./component/CssStyle";
import BootstrapBtn from "./component/BootstrapBtn";
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
import * as serviceWorker from "./serviceWorker";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />

    );
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
        <ErrorCounter action={"handleClick"} />
      </ErrorBoundary>
    </div>
  )

  const AjaxEx = () => (
    <div>
      <h1>Fetch</h1>
      <Fetch />
      <h1>Axios</h1>
      <Axios />
    </div>
  )

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
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloGroup />, document.getElementById('root'));
// ReactDOM.render(<AlarmClockControl />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    {/* <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div> */}
    <FieldLevelValidationForm onSubmit={showResults} />
    <Router>
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to={{
                pathname: '/hello',
                state: { id: '1', message: 'hello, component' }
            }}>Welcome</Link>
          </li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/essayform">EssayForm</Link></li>
          <li><Link to="/flavorform">FlavorForm</Link></li>
          <li><Link to="/alarmClockControl">AlarmClockControl</Link></li>
          <li><Link to="/cssStyle">CssStyle</Link></li>
          <li><Link to="/bootstrap">BootstrapBtn</Link></li>
          <li><Link to="/propType">PropType</Link></li>
          <li><Link to="/error">Error Boundaries</Link></li>
          <li><Link to="/stateDiff">StateDiff</Link></li>
          <li><Link to="/AjaxEx">AjaxEx</Link></li>
          <li><Link to="/Calculator">Calculator</Link></li>
          <li><Link to="/WelcomeDialog">WelcomeDialog</Link></li>
          <li><Link to="/FilterableProductTable">FilterableProductTable</Link></li>
          <li><Link to="/AccordionEx">AccordionEx</Link></li>
          <li><Link to="/formik-basic">Formik Basic</Link></li>
          <li><Link to="/formik-form">Formik From</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/hello" render={props =><HelloTo name="joe" gender="MR." {...props} />} />
        <Route path="/form" component={Form}/>
        <Route path="/essayform" component={EssayForm}/>
        <Route path="/flavorform" component={FlavorForm}/>
        <Route path="/alarmClockControl" component={AlarmClockControl}/>
        <Route path="/cssStyle" component={CssStyle}/>
        <Route path="/bootstrap" component={BootstrapBtn}/>
        <Route path="/propType" render={props=><PropType name={12345} age={"23"} gender="superman" />} />
        <Route path="/error" component={Error}/>
        <Route path="/stateDiff" component={StateDiff}/>
        <Route path="/AjaxEx" component={AjaxEx}/>
        <Route path="/Calculator" component={Calculator}/>
        <Route path="/WelcomeDialog" component={WelcomeDialog}/>
        <Route path="/AccordionEx" component={AccordionEx}/>
        <Route
            path="/FilterableProductTable"
            render={props => <FilterableProductTable products={PRODUCTS} {...props} />}
        />
        <Route path="/formik-basic" component={FormikBasic}/>
        <Route path="/formik-form" component={FormikForm}/>
        <hr></hr>
        <NumberList numbers={numbers} />
      </div>
    </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
