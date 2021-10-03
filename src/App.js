import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onSaveButtonClick = () => {
    const newCard = { ...this.state };
    delete newCard.cards;
    this.setState(({ cards }) => ({ cards: [...cards, newCard] }));
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    const { onInputChange, onSaveButtonClick, state: { cards }, state } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...state }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        {cards.map((card, i) => <Card key={ i } { ...card } />)}
      </div>
    );
  }
}

export default App;
