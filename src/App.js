import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import AllCards from './components/AllCards';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
      hasTrunfo: false,
      gameCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete({ target: { value } }) {
    const { gameCards } = this.state;

    const cardToDelet = gameCards.filter((card) => card.cardName === value);
    if (cardToDelet[0].cardTrunfo) {
      this.setState({ cardTrunfo: false, hasTrunfo: false });
    }
    const updateGameCards = gameCards.filter((card) => card.cardName !== value);
    this.setState({
      gameCards: updateGameCards,
    });
  }

  onInputChange({ target: { value, name } }) {
    if (name === 'trunfo') {
      this.setState((prevState) => ({ cardTrunfo: !prevState.cardTrunfo }));
    }

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const magicNumber = 210;
    const magicNumber2 = 90;

    this.setState({
      [name]: value,
    });

    if ((cardName.length > 1)
    && (cardRare.length > 1)
    && (cardDescription.length > 1)
    && (cardImage.length > 1)
    && (Number(cardAttr1) < magicNumber2)
    && (Number(cardAttr2) < magicNumber2)
    && (Number(cardAttr3) < magicNumber2)
    && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) < magicNumber)) {
      return this.setState(({
        isSaveButtonDisabled: false,
      }));
    }
  }

  onSaveButtonClick() {
    const {
      gameCards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    gameCards.push(card);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true, cardTrunfo: false });
    }
  }

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
      isSaveButtonDisabled,
      hasTrunfo,
      gameCards,
    } = this.state;

    return (
      <div>
        <header className="header-container">
          <img src="https://st2.depositphotos.com/4497765/7554/v/950/depositphotos_75545899-stock-illustration-super-comic-book-style-word.jpg" alt="Logo Super" />
          <h1>Tryunfo</h1>
        </header>
        <div className="create-card-conteiner">
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview-container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              hasTrunfo={ hasTrunfo }
            />
          </div>
        </div>
        <div>
          <AllCards
            gameCards={ gameCards }
            handleDelete={ this.handleDelete }
          />
        </div>
      </div>
    );
  }
}

export default App;
