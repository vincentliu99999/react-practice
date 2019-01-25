import React from 'react';

class HelloTo extends React.Component {
    render() {
        console.dir(this.props);
        return <h2>Hello, {this.props.gender} {this.props.name}</h2>
    }
}

export default HelloTo;