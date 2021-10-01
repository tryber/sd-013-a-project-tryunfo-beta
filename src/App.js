import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      yugioh: [],
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyButton = this.verifyButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target: { id, value, type } }) {
    if (type !== 'checkbox') {
      this.setState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    }
    this.verifyButton();
  }

  onSaveButtonClick() {
    const {
      isSaveButtonDisabled,
      yugioh,
      ...newCard
    } = this.state;
    this.setState((state) => (
      {
        yugioh: [...state.yugioh, newCard],
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
      }
    ));
  }

  // base para criar a função https://pt.stackoverflow.com/questions/6819/como-habilitar-um-bot%C3%A3o-apenas-quando-todos-os-inputs-estiverem-preenchidos
  verifyButton() {
    let controle = true;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > Number('210')) {
      controle = false;
    }
    if (Number(cardAttr1) > Number('90') || Number(cardAttr1) <= 0) controle = false;
    if (Number(cardAttr2) > Number('90') || Number(cardAttr2) <= 0) controle = false;
    if (Number(cardAttr3) > Number('90') || Number(cardAttr3) <= 0) controle = false;
    if (cardName && cardDescription && cardImage && cardRare && controle) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
