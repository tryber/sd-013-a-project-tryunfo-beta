import React from 'react';
import { Card, Form } from './components';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  onInputChange = ({ target: { id, value, checked } }) => {
    if (id === 'cardTrunfo') {
      this.setState({ [id]: checked });
    } else {
      this.setState({ [id]: value });
    }
  }

  render() {
    // const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    //   cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <div className="form-and-preview">
          <Form { ...this.state } onInputChange={ this.onInputChange } />
          <Card { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;
