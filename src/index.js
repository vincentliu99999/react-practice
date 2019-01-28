import React from "react";
import ReactDOM from "react-dom";
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
  
  const numbers = [1, 2, 3, 4, 5];


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

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloGroup />, document.getElementById('root'));
// ReactDOM.render(<AlarmClockControl />, document.getElementById("root"));
ReactDOM.render(
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
        <NumberList numbers={numbers} />
      </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
