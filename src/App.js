import React from 'react';
import { Form } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
      </div>
    );
  }
}

export default App;
