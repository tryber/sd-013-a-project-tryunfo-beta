import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ImageInput extends Component {
  render() {
    const { state: { onInputChange, cardImage } } = this.props;

    return (
      <label htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          src=""
          alt=""
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />

      </label>
    );
  }
}

ImageInput.propTypes = {
  state: PropTypes.arrayOf().isRequired,
};

export default ImageInput;
