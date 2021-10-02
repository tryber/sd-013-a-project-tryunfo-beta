import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TrunfoInput extends Component {
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
  state: PropTypes.shape({
    onInputChange: PropTypes.func,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
};

export default TrunfoInput;
