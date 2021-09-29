import React from 'react';
import { Form, Card } from './components';

class App extends React.Component {
  render() {
    const propsForm = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    };

    const propsCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    return (
      <div>
        <Form data={ propsForm } />
        <Card data={ propsCard } />
      </div>
    );
  }
}

export default App;
