import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  render() {
    const { type, name, onInputChange, value } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        { name }
        <input
          type={ type }
          name={ name }
          id={ `${name}-input` }
          data-testid={ `${name}-input` }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputField;
