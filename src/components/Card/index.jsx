import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  /*

Exiba o texto Super Trunfo somente quando o valor da prop cardTrunfo for true. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo .
  */
  render() {
    const {
      cardAttr1, cardAttr2, cardAttr3,
      cardDescription, cardName,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <section>
        <article data-testid="name-card">{cardName}</article>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <article data-testid="description-card">{cardDescription}</article>
        <article>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </article>
        <article data-testid="rare-card">{cardRare}</article>
        {cardTrunfo && <article data-testid="trunfo-card">Super Trunfo</article>}
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
