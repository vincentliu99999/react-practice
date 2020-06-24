import React, { Fragment } from 'react';

function ActionLink() {
  function handleClick(e, ...args) {
    console.log(args);
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#top" onClick={e => handleClick(e, 'id')}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isToggleOn2: true,
      isToggleOn3: true,
      isToggleOn4: true,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this, 'id', 'value');
  }

  // manual binding
  handleClick(...args) {
    console.log(args);
    console.log(`arg1: ${args[0]}, arg2,: ${args[1]}`);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // class fields syntax
  handleClick2 = () => {
    console.log('this is:', this);
    this.setState(state => ({
      isToggleOn2: !state.isToggleOn2
    }));
  }

  // arrow function: extra re-rendering
  handleClick3(id, value) {
    console.log('this is:', this);
    console.log(`arg1: ${id}, arg2,: ${value}`);
    this.setState(state => ({
      isToggleOn3: !state.isToggleOn3
    }));
  }

  // pass extra arguments
  handleClick4(id, value) {
    console.log(`arg1: ${id}, arg2,: ${value}`);

    this.setState(state => ({
      isToggleOn4: !state.isToggleOn4
    }));
  }

  render() {
    return (
      <Fragment>
        <ActionLink />
        <button type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button type="button" onClick={this.handleClick2}>
          {this.state.isToggleOn2 ? 'ON' : 'OFF'}
        </button>
        <button type="button" onClick={e => this.handleClick3('toggle1', '456', e)}>
          {this.state.isToggleOn3 ? 'ON' : 'OFF'}
        </button>
        <button type="button" onClick={this.handleClick4.bind(this, 'toggle1', '456')}>
          {this.state.isToggleOn4 ? 'ON' : 'OFF'}
        </button>
      </Fragment>
    );
  }
}

export default Toggle;
