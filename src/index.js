import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloTo from './HelloTo'
import * as serviceWorker from './serviceWorker';

function HelloGroup() {
    return (
      <div>
        <HelloTo name="Vincent" gender="Mr." />
        <HelloTo name="Sunny" gender="Miss." />
        <HelloTo name="Jack" gender="Mr." />
      </div>
    );
  }

ReactDOM.render(<HelloGroup />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
