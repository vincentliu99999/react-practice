import React, { Component } from 'react';

class ErrorCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }),
    function(){
      console.log(this.state.counter)
      try {
        if(this.props.action === "handleClick" && this.state.counter === 3) {
          throw new Error('handleClick error!!');
        }
      } catch (error) {
        this.setState({ error: error });
      }
    });
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('error!!');
    } else if(this.state.error !== null) {
      return <h1>{this.state.error}</h1>;
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default ErrorCounter;