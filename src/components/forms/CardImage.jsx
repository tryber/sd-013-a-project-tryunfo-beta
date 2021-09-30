import React from 'react';
import PropTypes from 'prop-types';

class CardImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="imput-card-image">
          <input
            type="text"
            id="imput-card-image"
            placeholder="url da imagem"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

CardImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardImage;
