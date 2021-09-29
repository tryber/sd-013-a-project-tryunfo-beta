import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { data: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } } = this.props;
    return (
      <div>
        <span data-testid="name-card">{cardName}</span>
        <img src={ cardImage } alt="imgae" data-testid="image-card" />
        <span data-testid="description-card">{cardDescription}</span>
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <span data-testid="rare-card">{cardRare}</span>
        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({}),
}.isRequired;

export default Card;
