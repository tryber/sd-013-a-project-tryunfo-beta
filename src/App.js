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
      rare: '',
      isSaveButtonDisabled: false,
      hasTrunfo: false,
      cardTrunfo: true,

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleChange({ target: { value, id, checked, type } }) {
    const changeValue = (type === 'checkbox') ? checked : value;
    this.setState(() => ({ [id]: changeValue }));
  }

  onSaveButtonClick() {
    console.log('oi');
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
