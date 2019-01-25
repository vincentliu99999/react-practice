import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloTo from "./HelloTo";
import AlarmClockControl from "./AlarmClockControl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const Repos = () => (
  <div>
    <h2>Repos</h2>
  </div>
);

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

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloGroup />, document.getElementById('root'));
// ReactDOM.render(<AlarmClockControl />, document.getElementById("root"));
ReactDOM.render(
    <Router>
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to={{
              pathname: '/hello',
              state: { id: '1', message: 'hello, component' }
            }}>Welcome</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
        <Route path="/hello" render={props =><HelloTo name="joe" gender="MR." {...props} />} />
        <NumberList numbers={numbers} />
      </div>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
