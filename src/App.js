import React from 'react';
import { Form } from './components';

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

    return (
      <div>
        <Form data={ propsForm } />
      </div>
    );
  }
}

export default App;
