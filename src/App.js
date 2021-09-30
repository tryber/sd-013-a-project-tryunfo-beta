import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      isSaveButtonDisabled: true,
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target: { value, name } }) {
    const magicNumber = 210;
    const magicNumber2 = 90;
    const {
      cardRare, cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    if (name === 'trunfo') {
      this.setState((prevState) => ({ cardTrunfo: !prevState.cardTrunfo }));
    }
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
      return this.setState((prev) => ({
        isSaveButtonDisabled: !prev.isSaveButtonDisabled,
      }));
    }
  }

  onSaveButtonClick() {
    console.log('click');
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
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
