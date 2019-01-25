import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function HelloTo(props) {
    return <h1>Hi, {props.name}</h1>;
  }
  
  const people = {"name": "Vincent Liu"};

ReactDOM.render(HelloTo(people), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
