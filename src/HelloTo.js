import React from "react";

class HelloTo extends React.Component {
  constructor(props) {
    console.dir(props);
    super(props);
    console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.state = {date: new Date()};
  }

  handleClick() {
    this.setState({date: new Date()});
  }

  componentWillMount() {
    console.log('componentWillMount');
    clearInterval(this.timerID);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
        () => this.tick(),
        5000
      );
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.dir(nextProps);
    console.dir(nextState);
    // console.log('nextProps:'+nextProps.name);
    // console.log('nextState:'+nextState.date);
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('render');
    
    return (
      <div>
      <h2>Hello, {this.props.gender} {this.props.name}</h2>
      <h2 onClick={this.handleClick}>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default HelloTo;
