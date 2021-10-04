import React from 'react';
import { Card, Form } from './components';

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
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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

  render() {
    const { deck } = this.state;
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {
          deck.map((card, index) => <Card key={ index } { ...card } />)
        }
      </div>
    );
  }
}

export default App;
