import React from 'react';
import { Card, Form, Input } from './components';
import { validateNames, validateNumbers, validateSum } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    // para resetar formulario
    this.formState = {
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
    this.state = {
      ...this.formState,
      cards: [],
      filterName: '',
      filterRare: 'todas',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(() => {
      const validationButton = this.handleValues();
      return { [name]: value, isSaveButtonDisabled: validationButton };
    });
  }

  handleValues() {
    const {
      cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const strings = [cardName, cardDescription, cardImage, cardRare];
    const attrs = [cardAttr1, cardAttr2, cardAttr3];

    /* `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação */
    const areStringsValids = validateNames(strings);
    /*  atributos `attr1-input`, `attr2-input` e `attr3-input` máximo 90 pontos cada */
    const areAttrsValids = validateNumbers(attrs);
    /* atributos `attr1-input` + `attr2-input` + `attr3-input` menor igual a 210. */
    const areAttrsSumValid = validateSum(attrs);

    /* verificando se todas validações estão corretas */
    const validation = [areStringsValids, areAttrsValids, areAttrsSumValid]
      .every((validate) => validate);

    /* negação pois as validações retornam o resultado esperado,
    e o botão espera o oposto disso no disabled */
    return !validation;
  }

  handleSaveCard(cardInfo) {
    const { cards } = this.state;
    // cardTrunfo(checkbox checked) ? true : false === !!
    const hasTrunfo = !!cardInfo.cardTrunfo;
    this.setState({ cards: [...cards, cardInfo], hasTrunfo, ...this.formState });
  }

  handleDeleteCard(cardName, cardTrunfo) {
    const { cards } = this.state;
    // cardTrunfo salvo no estado como on caso checked, logica inversa pois somente se tiver, o formulario aparece
    const hasTrunfo = cardTrunfo !== 'on';
    this.setState({
      cards: [...cards].filter((card) => card.cardName !== cardName),
      hasTrunfo,
      ...this.formState,
    });
  }

  render() {
    const { cards, filterName, filterRare } = this.state;
    return (
      <main>
        <h1>Tryunfo</h1>
        <Input
          testId="name-filter"
          name="filterName"
          label="Filtrar por nome"
          placeholder="Buscar por nome da carta"
          type="textarea"
          onChange={ this.handleChange }
          value={ filterName }
        />
        <Input
          name="filterRare"
          label="Filtrar por raridade"
          testId="rare-filter"
          type="select"
          options={ ['normal', 'raro', 'muito raro', 'todas'] }
          value={ filterRare }
          onChange={ this.handleChange }
        />
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveCard }
        />
        <Card previewMode { ...this.state } />
        {cards
          .filter((card) => card.cardName.includes(filterName))
          .filter((card) => {
            const verifyCardRare = {
              normal: card.cardRare === 'normal',
              raro: card.cardRare === 'raro',
              'muito raro': card.cardRare === 'muito raro',
            };
            if (filterRare === 'todas') return card;
            return verifyCardRare[filterRare];
          })
          .map((card) => (<Card
            { ...card }
            onDeleteButtonClick={ this.handleDeleteCard }
            key={ card.cardName }
          />))}
      </main>
    );
  }
}

export default App;
