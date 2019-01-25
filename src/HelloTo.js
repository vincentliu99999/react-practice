import React from "react";

class HelloTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    console.dir(this.props);
    return (
      <h2>
        {this.state.date.toLocaleTimeString()} Hello, {this.props.gender} {this.props.name}
      </h2>
    );
  }
}

export default HelloTo;
