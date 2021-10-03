import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GenericInput extends Component {
  renderInput() {
    const { label, name, placeholder, testId, type, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        {type === 'checkbox' ? (
          <input
            data-testid={ testId }
            name={ name }
            id={ name }
            placeholder={ placeholder }
            type="checkbox"
            onChange={ onChange }
            checked={ value }
          />
        )
          : (
            <input
              data-testid={ testId }
              name={ name }
              id={ name }
              placeholder={ placeholder }
              type={ type }
              onChange={ onChange }
              value={ value }
            />
          )}
      </label>
    );
  }

  renderSelect() {
    const { label, name, placeholder, options, testId, onChange, value } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select
          data-testid={ testId }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
        >
          {options.map((option, i) => (
            <option key={ i } value={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  renderTextarea() {
    const { label, name, placeholder, testId, onChange, value } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <textarea
          data-testid={ testId }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }

  render() {
    const { type } = this.props;
    const verifyInput = {
      textarea: this.renderTextarea(),
      select: this.renderSelect(),
    };
    return (
      verifyInput[type] || this.renderInput()
    );
  }
}

GenericInput.defaultProps = {
  type: 'text',
  options: [],
};

GenericInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default GenericInput;
