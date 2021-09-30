import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
      // hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  // this.setState(prevState => ({
  //   check: !prevState.check
  // }));

  onInputChange({ target: { value, name } }) {
    if (name === 'cardTrunfo') {
      this.setState((prevState) => ({ cardTrunfo: !prevState.cardTrunfo }));
    }
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    console.log('click');
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    const myProps = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          value={ myProps }
          handleClick={ this.handleClick }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card />
      </div>
    );
  }
}

export default App;
