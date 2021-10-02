import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <header className="card-header">
          <h4 className="card-name" data-testid="name-card">
            { cardName }
          </h4>
        </header>
        <section>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="card-image"
          />
          <p className="card-description" data-testid="description-card">
            { cardDescription }
          </p>
        </section>
        <section className="atrr-conteiner">
          <span data-testid="attr1-card">
            <span className="atrr-span">attr 1</span>
            { cardAttr1 }
          </span>
          <span data-testid="attr2-card">
            <span className="atrr-span">attr 2</span>
            { cardAttr2 }
          </span>
          <span data-testid="attr3-card">
            <span className="atrr-span">attr 3</span>
            { cardAttr3 }
          </span>
        </section>
        <footer className="card-footer">
          <p id="p-rare-footer" data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo && <p id="p-footer" data-testid="trunfo-card">Super Trunfo</p>}
        </footer>
      </div>
    );
  }
}

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

export default Card;
