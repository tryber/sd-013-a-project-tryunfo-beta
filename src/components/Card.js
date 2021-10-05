import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Card extends Component {
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
      <div className="card">
        <div className="card-board">
          <div className="title" data-testid="name-card">
            {cardName}
            {cardTrunfo && <div data-testid="trunfo-card">&nbsp; ⭐⭐⭐ Super Trunfo</div>}
          </div>
          <div className="image">
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <div className="type">
            Speed
            <div className="symbol" data-testid="attr1-card">
              {cardAttr1}
            </div>
          </div>
          <div className="type">
            Power
            <div className="symbol" data-testid="attr2-card">
              {cardAttr2}
            </div>
          </div>
          <div className="type">
            Weight
            <div className="symbol" data-testid="attr3-card">
              {cardAttr3}
            </div>
          </div>
          <div className="desc" data-testid="description-card">
            {cardDescription}
          </div>
          <div className="footer" data-testid="rare-card">
            {`${cardRare} .`}

          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {

};

export default Card;
