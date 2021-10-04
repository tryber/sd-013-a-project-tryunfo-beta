import React from 'react';
import { Card, Form } from './components';
/*
cardAttr1: PropTypes.string.isRequired,
cardAttr2: PropTypes.string.isRequired,
cardAttr3: PropTypes.string.isRequired,
cardDescription: PropTypes.string.isRequired,
cardImage: PropTypes.string.isRequired,
cardName: PropTypes.string.isRequired,
cardRare: PropTypes.string.isRequired,
cardTrunfo: PropTypes.bool.isRequired,
hasTriunfo: PropTypes.bool.isRequired, */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(() => {
      const validationButton = this.handleValues();
      return {
        [name]: value,
        isSaveButtonDisabled: validationButton,
      };
    });
  }

  handleValues() {
    const {
      cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const MAX_NUMBER = 90;
    const MIN_NUMBER = 0;
    /* `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação */
    const validateNames = [cardName, cardDescription, cardImage, cardRare]
      .every((stringValue) => stringValue !== '');

    /*  atributos `attr1-input`, `attr2-input` e `attr3-input` máximo 90 pontos cada */
    const validateNumbers = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)]
      .every((number) => number >= MIN_NUMBER && number <= MAX_NUMBER);

    /* atributos `attr1-input` + `attr2-input` + `attr3-input` menor igual a 210. */
    const validateSum = () => {
      const MAX_SUM = 210;
      const sum = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)]
        .reduce((acc, crr) => {
          const value = acc + crr;
          return value;
        }, 0);
      return sum <= MAX_SUM;
    };

    /* verificando se todas validações estão corretas */
    const validation = [validateNames, validateNumbers, validateSum()]
      .every((validate) => validate);

    /* negação pois as validações retornam o resultado esperado,
       e o botão espero o oposto disso no disabled */
    return !validation;
  }

  handleSave() {
    // onSaveButtonClick
  }

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.handleChange } />
        <Card { ...this.state } />
      </main>
    );
  }
}

export default App;
