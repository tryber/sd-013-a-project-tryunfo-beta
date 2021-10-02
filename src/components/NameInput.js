import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NameInput extends Component {
  render() {
    const { state: { cardName, onInputChange } } = this.props;
    return (
      <label htmlFor="name-input">
        Nome
        <input
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
          type="text"
          name="cardName"
          id="name-input"
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  state: PropTypes.arrayOf().isRequired,
};

export default NameInput;
