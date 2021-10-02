import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RareInput extends Component {
  render() {
    const { state: { cardRare, onInputChange } } = this.props;
    return (
      <label htmlFor="rare-input">
        <select
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
          id="rare-input"
          data-testid="rare-input"
        >
          <option value="normal" select={ cardRare }>Nomal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

RareInput.propTypes = {
  state: PropTypes.shape({
    onInputChange: PropTypes.func,
    cardRare: PropTypes.string,
  }).isRequired,
};

export default RareInput;
