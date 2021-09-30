import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { allCards, deleteCard } = this.props;
    return (
      <div>
        { (allCards && allCards.length !== 0) && allCards.map(
          ({ name, description, attr1, attr2, attr3, image, rare, trunfo }, index) => (
            <Card
              key={ `${index}-${name}` }
              deleteBtn
              deleteCard={ () => deleteCard(index) }
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          ),
        ) }
      </div>
    );
  }
}

CardList.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
