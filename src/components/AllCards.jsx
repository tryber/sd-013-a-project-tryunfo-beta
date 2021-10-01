import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { gameCards, handleDelete } = this.props;

    return (
      <div>
        <h3>Todas as cartas</h3>
        {gameCards.map((card, idx) => (
          <section key={ `${card.cardName}${idx}` }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              onClick={ handleDelete }
              value={ card.cardName }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </section>
        ))}
      </div>
    );
  }
}

AllCards.propTypes = {
  gameCards: PropTypes.arrayOf(PropTypes.shape()),
  handleDelete: PropTypes.func.isRequired,
};

AllCards.defaultProps = {
  gameCards: [],
};

export default AllCards;
