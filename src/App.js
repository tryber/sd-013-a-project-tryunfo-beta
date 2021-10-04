import React from 'react';
import { Card, Form } from './components';

const MAX = 90;
const MAX_SUM = 210;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, this.checkInputs);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log('salvou');
  }

  checkInputs() {
    const check = [];
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    Object.entries(this.state).forEach(([key, value]) => {
      if ((key.includes('cardAttr')
      && (Number(value) < 0 || Number(value) > MAX)) || value === '') {
        check.push(false);
      }
    });
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > MAX_SUM) {
      check.push(false);
    }
    if (!check.includes(false)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
