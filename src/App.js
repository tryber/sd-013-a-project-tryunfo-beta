import React, { Component } from 'react';
import Card from './components/Card';
import FilterCards from './components/FilterCards';
import Form from './components/Form';

const defaultState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  filterName: '',
  filterRaridade: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};
class App extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.notEmptyString = this.notEmptyString.bind(this);
    this.validNumberAttr = this.validNumberAttr.bind(this);
    this.saveCard = this.saveCardPreview.bind(this);
    this.removeCard = this.removeCard.bind(this);

    this.state = {
      cardList: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      filterName: '',
      filterRaridade: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange(event) {
    this.setState({ isSaveButtonDisabled: true });
    const { name } = event.target;
    let { value } = event.target;
    value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState(({ [name]: value }), () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      const textsTrue = this.notEmptyString(
        cardName, cardDescription, cardImage, cardRare,
      );
      const numbersTrue = this.validNumberAttr(cardAttr1, cardAttr2, cardAttr3);

      if (textsTrue && numbersTrue) this.setState({ isSaveButtonDisabled: false });
    });
  }

  onSaveButtonClick() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,

      cardTrunfo,
      hasTrunfo } = this.state;
    this.saveCardPreview({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });
    this.setState(defaultState);
    return true;
  }

  saveCardPreview(newCard) {
    this.setState((prevState) => ({ cardList: [...prevState.cardList, newCard] }));
  }

  removeCard() {}

  notEmptyString(...texts) {
    return texts.every((text) => Boolean(text));
  }

  validNumberAttr(...value) {
    const MAX_TOTAL = 210;
    const MAX_ATTR = 90;
    const total = value.reduce((acc, curr) => Number(acc) + Number(curr), 0);

    // maior que 210 para o codigo.
    if (total > MAX_TOTAL) return false;

    // Se tive numero maior igual a 0 condição verdadeira nego e return false
    if (!value.every((curr) => Number(curr) >= 0)) return false;

    // Se tive um maior que 90 condição e false vira verdade e return false.
    if (!value.every((curr) => Number(curr) <= MAX_ATTR)) return false;
    return true;
  }

  render() {
    return (
      <div className="container-tryunfo">
        <div className="container-preview">
          <div>
            <Form
              { ...this.state }
            />
          </div>
          <div>
            <h1>Previa do Card</h1>
            <Card { ...this.state } />
          </div>
        </div>
        <div className="container-display-card">
          <div><FilterCards /></div>
          <div>
            {/* <h1>Lista De Card</h1>
            <Card /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
