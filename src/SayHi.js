import React, { Component } from 'react';

class SayHi extends React.Component {
  constructor(props) {
    super(props);
    console.log('url:'+props.match.url);
    console.log(this.props.location.state.message);
    this.state = {date: new Date()};
  }

  render() {
    return <h1>{this.state.date.toLocaleTimeString()} Hi, {this.props.name}</h1>;
  }
}

export default SayHi;