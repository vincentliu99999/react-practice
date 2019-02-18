import React, { Component } from 'react';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsobj: {},
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://httpbin.org/get")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            rsobj: result
          });
        },(error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { isLoaded, error, rsobj } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <p>{JSON.stringify(rsobj)}</p>
      );
    }
  }
}

export default Fetch;
