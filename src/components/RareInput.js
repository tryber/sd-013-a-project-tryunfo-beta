import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class RareInput extends Component {
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
          <option value="normal" select>Nomal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

RareInput.propTypes = {
  state: PropTypes.arrayOf().isRequired,
};

export default RareInput;
