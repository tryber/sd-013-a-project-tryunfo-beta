import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    const { type, name, testid, value, onChange } = this.props;
    if (type === 'textarea') {
      return (
        <label htmlFor={ name }>
          <textarea
            data-testid={ testid }
            name={ name }
            onChange={ onChange }
            value={ value }
            placeholder={ value }
          />
        </label>
      );
    }
    if (type === 'select') {
      return (
        <label htmlFor={ name }>
          <select
            name={ name }
            data-testid={ testid }
            onChange={ onChange }
            value={ value }
          >
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
          value={ value }
          checked={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.bool, PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
