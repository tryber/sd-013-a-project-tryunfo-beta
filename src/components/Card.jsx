import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    const superTrunfo = (
      <h2 data-testid="trunfo-card">Super Trunfo</h2>
    );

    return (
      <>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <span data-testid="rare-card">{ cardRare }</span>
        { cardTrunfo ? superTrunfo : ''}
      </>
    );
  }
}

export default Card;
