import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, testid, onChange, value, checked } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          onChange={ (e) => onChange(e) }
          type={ type }
          name={ name }
          value={ value }
          placeholder={ name }
          data-testid={ testid }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  checked: false,
};

export default Input;
