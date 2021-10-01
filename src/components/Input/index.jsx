import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  renderInput() {
    const { label, name, placeholder, testId, type } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          data-testid={ testId }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          type={ type }
        />
      </label>
    );
  }

  renderSelect() {
    const { label, name, placeholder, options, testId } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select
          data-testid={ testId }
          name={ name }
          id={ name }
          placeholder={ placeholder }
        >
          {options.map((option, i) => (
            <option key={ i } value={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  renderTextarea() {
    const { label, name, placeholder, testId } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <textarea
          data-testid={ testId }
          name={ name }
          id={ name }
          placeholder={ placeholder }
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

Input.defaultProps = {
  type: 'text',
  options: [],
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Input;
