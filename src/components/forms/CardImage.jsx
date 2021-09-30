import React from 'react';
import PropTypes from 'prop-types';

class CardImage extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="imput-card-image">
          <input
            type="text"
            id="imput-card-image"
            placeholder="url da imagem"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
            data-testid="image-input"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardImage;
