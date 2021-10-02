import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, testid } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          name={ name }
          placeholder={ name }
          data-testid={ testid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Input;
