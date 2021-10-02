import React, { Component } from 'react';

export class ImageInput extends Component {
  render() {
    return (
      <label htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="image"
          src=""
          alt=""
        />

      </label>
    );
  }
}

export default ImageInput;
