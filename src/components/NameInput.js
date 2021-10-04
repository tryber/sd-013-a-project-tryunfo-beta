import PropTypes from 'prop-types';
import React, { Component } from 'react';

class NameInput extends Component {
  render() {
    const { state: { cardName, onInputChange } } = this.props;
    return (
      <label htmlFor="name-input">
        Nome da carta
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
  state: PropTypes.shape({
    cardName: PropTypes.string,
    onInputChange: PropTypes.func,
  }).isRequired,
};

export default NameInput;
