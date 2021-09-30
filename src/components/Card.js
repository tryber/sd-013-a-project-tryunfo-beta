import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          style={ { width: '150px' } }
          data-testid="image-card"
          src={ cardImage }
          alt="Nome da carta"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <h4 data-testid="rare-card">{ cardRare }</h4>
        { (cardTrunfo) && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr1: PropTypes.number.isRequired,
};

export default Card;
