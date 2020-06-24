import React, { Component } from 'react';

class StateDiff extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      // eslint-disable-next-line func-names
      function () {
        console.log('handleClick_fn:' + this.state.counter);
      }
    );
    console.log('handleClick:' + this.state.counter);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate:' + this.state.counter);
  }

  render() {
    return <h1 onClick={this.handleClick}>Checkout Console: {this.state.counter}</h1>;
  }
}

export default StateDiff;
