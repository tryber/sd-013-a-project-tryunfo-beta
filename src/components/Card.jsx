import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div className="card-preview">
        <span className="card-name" data-testid="name-card">{cardName}</span>
        <img
          src={ cardImage }
          alt={ cardName }
          className="card-img"
          data-testid="image-card"
        />
        <span className="card-description" data-testid="description-card">
          { cardDescription }
        </span>
        <span className="card-attr" data-testid="attr1-card">{ cardAttr1 }</span>
        <span className="card-attr" data-testid="attr2-card">{ cardAttr2 }</span>
        <span className="card-attr" data-testid="attr3-card">{ cardAttr3 }</span>
        <span className="card-rare" data-testid="rare-card">{ cardRare }</span>
        { cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
