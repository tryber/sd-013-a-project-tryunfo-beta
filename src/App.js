import React from 'react';
import { Card, Form, Filters } from './components';

const MAX = 90;
const MAX_SUM = 210;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filters: {
        name: '',
        rarity: 'todas',
      },
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter({ target }) {
    this.setState((prev) => ({
      filters: {
        ...prev.filters,
        [target.name]: target.value,
      },
    }));
  }

  onInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, this.checkInputs);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prev) => {
      const card = { ...prev };
      delete card.deck;
      delete card.filters;
      return {
        deck: [...prev.deck, card],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      };
    });
  }

  checkInputs() {
    const check = [];
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    Object.entries(this.state).forEach(([key, value]) => {
      if ((key.includes('cardAttr')
      && (Number(value) < 0 || Number(value) > MAX)) || value === '') {
        check.push(false);
      }
    });
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > MAX_SUM) {
      check.push(false);
    }
    if (!check.includes(false)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  deleteCard(name) {
    const { deck } = this.state;
    deck.forEach((card) => {
      if (card.cardName === name && card.cardTrunfo) {
        this.setState({ hasTrunfo: false });
      }
    });
    this.setState((prev) => ({
      deck: prev.deck.filter((card) => name !== card.cardName),
    }));
  }

  render() {
    const { deck, filters } = this.state;
    const { name, rarity } = filters;
    const preview = true;
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } preview={ preview } />
        <Filters handleFilter={ this.handleFilter } />
        {
          deck
            .filter((card) => card.cardName.includes(name))
            .filter((card) => {
              if (rarity === 'todas') return true;
              if (card.cardRare === rarity) return true;
              return false;
            })
            .map((card) => (
              <Card
                key={ card.cardName }
                { ...card }
                deleteCard={ this.deleteCard }
              />))
        }
      </div>
    );
  }
}

export default App;
