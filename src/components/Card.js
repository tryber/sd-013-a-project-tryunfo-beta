import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <section className="container-card">
        <div><h1 data-testid="name-card">{cardName}</h1></div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          { !cardTrunfo || <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
        <div><p data-testid="description-card">{cardDescription}</p></div>
        <div>
          <div>
            <p>Attr1..................</p>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div>
            <p>Attr2..................</p>
            <p data-testid="attr2-card">{cardAttr2}</p>
          </div>
          <div>
            <p>Attr3..................</p>
            <p data-testid="attr3-card">{cardAttr3}</p>
          </div>
          <div>
            <p data-testid="rare-card">{cardRare}</p>
          </div>
        </div>
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
