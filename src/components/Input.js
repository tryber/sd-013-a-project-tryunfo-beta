import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    const { type, name, testid } = this.props;

    if (type === 'textarea') {
      return (
        <label htmlFor={ name }>
          <textarea data-testid={ testid } name={ name } />
        </label>
      );
    }
    if (type === 'select') {
      return (
        <label htmlFor={ name }>
          <select name={ name } data-testid={ testid }>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ name }>
        <input
          name={ name }
          type={ type }
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
