import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: '',
  attr2: '',
  attr3: '',
  image: '',
  rare: '',
  trunfo: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { name, value, checked } }) {
    return name === 'trunfo'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo } = this.state;
    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
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
      </div>
    );
  }
}

export default App;
