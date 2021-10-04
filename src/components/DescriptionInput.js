import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    const { state: { onInputChange, cardDescription } } = this.props;
    return (
      <label htmlFor="description-input'">
        Descrição
        <textarea
          data-testid="description-input"
          id="description-input'"
          name="cardDescription"
          rows="6"
          cols="31"
          onChange={ onInputChange }
          value={ cardDescription }
        >
          It was a dark and stormy night...
        </textarea>
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  state: PropTypes.arrayOf().isRequired,
};

DescriptionInput.propTypes = {
  state: PropTypes.shape({
    onInputChange: PropTypes.func,
    cardDescription: PropTypes.string,
  }).isRequired,
};
export default DescriptionInput;
