import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * PropType component
 */
class PropType extends Component {
  render() {
    return (
      <div>
        <p>
          Hi, {this.props.name}
        </p>
        <p>
          age: {this.props.age}
        </p>
        <p>
          gender: {this.props.gender}
        </p>
      </div>
    );
  }
}

PropType.defaultProps = {
  name: 'Vincent',
  age: 18,
  gender: 'male',
};

PropType.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.oneOf(['male', 'female'])
};

export default PropType;
