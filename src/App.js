import React from 'react';
import { Form, Card, CardList } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      trunfo: false,
      allCards: [],
    };
    this.verifyButtonDisabled = this.verifyButtonDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handleChange({ target: { value, id, checked, type } }) {
    const changeValue = (type === 'checkbox') ? checked : value;
    this.setState(() => ({ [id]: changeValue }), this.verifyButtonDisabled);
  }

  onSaveButtonClick() {
    const { name, description, image, rare, attr3, attr2, attr1, trunfo } = this.state;
    const obj = { name, description, image, rare, attr3, attr2, attr1, trunfo };
    this.setState(({ allCards }) => ({ allCards: [...allCards, obj] }), () => {
      this.setState(() => ({
        name: '',
        description: '',
        image: '',
        rare: 'normal',
        attr1: 0,
        attr2: 0,
        attr3: 0,
      }));
      if (trunfo) this.setState(() => ({ hasTrunfo: true, trunfo: false }));
    });
  }

  deleteCard(index) {
    const { allCards } = this.state;
    const filteredCards = allCards.filter((_, i) => i !== index);
    const card = allCards.find((_, i) => i === index);
    if (card.trunfo) this.setState(() => ({ hasTrunfo: false }));
    this.setState(() => ({ allCards: filteredCards }));
  }

  verifyButtonDisabled() {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let verifyAttrs = true;
    if (Number(attr1) + Number(attr2) + Number(attr3) > Number('210')) {
      verifyAttrs = false;
    }
    if (Number(attr1) > Number('90') || Number(attr1) <= 0) verifyAttrs = false;
    if (Number(attr2) > Number('90') || Number(attr2) <= 0) verifyAttrs = false;
    if (Number(attr3) > Number('90') || Number(attr3) <= 0) verifyAttrs = false;
    if (name && description && image && rare && verifyAttrs) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare,
      hasTrunfo, trunfo, isSaveButtonDisabled, allCards } = this.state;

    return (
      <div>
        Lets Go!!
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <CardList deleteCard={ this.deleteCard } allCards={ allCards } />
      </div>
    );
  }
}

export default App;
