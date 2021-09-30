import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.filterCards = this.filterCards.bind(this);
  }

  filterCards() {
    const { allCards, nameFilter, rareFilter } = this.props;
    const filterByName = allCards.filter(({ name }) => name.includes(nameFilter));
    if (rareFilter === 'todas') return filterByName;
    return filterByName
      .filter(({ rare }) => rare === rareFilter);
  }

  render() {
    const { deleteCard, allCards } = this.props;
    return (
      <div>
        { (allCards && allCards.length !== 0) && this.filterCards()
          .map(
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
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default CardList;
