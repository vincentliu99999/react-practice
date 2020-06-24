import React from 'react';

class HelloTo extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    console.log(this.props);
    console.log('url:' + props.match.url);
    console.log(this.props.location.state);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
  }

  handleClick() {
    // this.setState({date: new Date()});
    console.log('this is:', this);
    this.tick();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  componentWillMount() {
    console.log('componentWillMount');
    clearInterval(this.timerID);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
    this.state.isToggleOn && this.setState(() => ({
      date: new Date()
    }));
  }

  render() {
    console.log('render');

    return (
      <div>
        <h2>Hello, {this.props.gender} {this.props.name}</h2>
        <h2 onClick={this.handleClick}>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default HelloTo;
