import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ImageInput extends Component {
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

ImageInput.propTypes = {
  state: PropTypes.shape({
    onInputChange: PropTypes.func,
    cardImage: PropTypes.string,
  }).isRequired,
};
export default ImageInput;
