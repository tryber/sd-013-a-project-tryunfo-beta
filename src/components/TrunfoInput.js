import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class TrunfoInput extends Component {
  render() {
    const { state: { cardTrunfo, onInputChange } } = this.props;
    return (
      <label htmlFor="trunfo-input">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trunfo
      </label>
    );
  }
}

TrunfoInput.propTypes = {
  state: PropTypes.arrayOf().isRequired,
};
export default TrunfoInput;
