import React from 'react';
import { Form, Card } from './components';

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
      cardTrunfo: true,
    };
    this.verifyButtonDisabled = this.verifyButtonDisabled.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleChange({ target: { value, id, checked, type } }) {
    const changeValue = (type === 'checkbox') ? checked : value;
    this.setState(() => ({ [id]: changeValue }), this.verifyButtonDisabled);
  }

  onSaveButtonClick() {
    // console.log('oi');
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
      hasTrunfo, cardTrunfo, isSaveButtonDisabled } = this.state;

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
          cardTrunfo={ cardTrunfo }
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
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
