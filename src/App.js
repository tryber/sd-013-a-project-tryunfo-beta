import React from 'react';
import { Form, Card } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.setIsSaveButtonDisabled = this.setIsSaveButtonDisabled.bind(this);
  }

  componentDidUpdate(_previousProps, previousState) {
    const { isSaveButtonDisabled } = this.state;
    if (
      previousState !== this.state
      && isSaveButtonDisabled !== false
      && previousState.isSaveButtonDisabled === isSaveButtonDisabled
    ) { this.setIsSaveButtonDisabled(false); }
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
  }

  onSaveButtonClick() {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      hasTrunfo: prevState.cardTrunfo !== true
        ? prevState.cardList.some((item) => item.cardTrunfo === true)
        : true,
      cardList: [...prevState.cardList,
        {
          cardName: prevState.cardName,
          cardDescription: prevState.cardDescription,
          cardAttr1: prevState.cardAttr1,
          cardAttr2: prevState.cardAttr2,
          cardAttr3: prevState.cardAttr3,
          cardImage: prevState.cardImage,
          cardRare: prevState.cardRare,
          cardTrunfo: prevState.cardTrunfo,
        }],
    }));
  }

  setIsSaveButtonDisabled(state) {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const MAX_SUM_ATTR = 210;
    const MAX_ATTR = 90;
    const MIN_ATTR = 0;
    const attr1 = cardAttr1 === '' ? '0' : cardAttr1;
    const attr2 = cardAttr2 === '' ? '0' : cardAttr2;
    const attr3 = cardAttr3 === '' ? '0' : cardAttr3;
    const sumAttr = parseFloat(attr1) + parseFloat(attr2) + parseFloat(attr3);
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && sumAttr <= MAX_SUM_ATTR
      && parseFloat(attr1) <= MAX_ATTR
      && parseFloat(attr2) <= MAX_ATTR
      && parseFloat(attr3) <= MAX_ATTR
      && parseFloat(attr1) >= MIN_ATTR
      && parseFloat(attr2) >= MIN_ATTR
      && parseFloat(attr3) >= MIN_ATTR
    ) {
      this.setState({
        isSaveButtonDisabled: state,
      });
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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
        />
      </div>
    );
  }
}

export default App;
