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
  disabled: true,
};

const SUM = 210;
const MAX = 90;
const ZERO = 0;

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { name, value, checked } }) {
    return name === 'trunfo'
      ? this.setState({ [name]: checked }, () => this.buttonDisabled())
      : this.setState({ [name]: value }, () => this.buttonDisabled());
  }

  buttonDisabled() {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;
    if (
      name !== ''
      && description !== ''
      && image !== ''
      && rare !== ''
      && (parseInt(attr1, 10) + parseInt(attr2, 10) + (parseInt(attr3, 10)) <= SUM)
      && (ZERO <= attr1 && attr1 <= MAX)
      && (ZERO <= attr2 && attr2 <= MAX)
      && (ZERO <= attr3 && attr3 <= MAX)
    ) return this.setState({ disabled: false });
    this.setState({ disabled: true });
  }

  render() {
    const { name, description, attr1, attr2, attr3,
      image, rare, trunfo, disabled } = this.state;
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
          isSaveButtonDisabled={ disabled }
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
