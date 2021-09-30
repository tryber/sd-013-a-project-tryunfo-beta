import React from 'react';
import Atribut from './forms/Atribut';
import Button from './forms/Button';
import CardImage from './forms/CardImage';
import CardName from './forms/CardName';
import Description from './forms/Description';
import SelectRarity from './forms/SelectRarity';
import SuperTrunfo from './forms/SuperTrunfo';

class Form extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      cardTrunfo: !prevState.cardTrunfo,
    }));
  }

  onInputChange({ target: { value, name } }) {
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

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <CardName
          onInputChange={ this.onInputChange }
          cardName={ cardName }
        />
        <Description
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
        />
        <Atribut
          onInputChange={ this.onInputChange }
          cardAttr1={ cardAttr1 }
          atribut={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
        <CardImage
          onInputChange={ this.onInputChange }
          cardImage={ cardImage }
        />
        <SelectRarity
          onInputChange={ this.onInputChange }
          cardRare={ cardRare }
        />
        <SuperTrunfo
          cardTrunfo={ cardTrunfo }
          handleClick={ this.handleClick }
        />
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onClick={ this.onSaveButtonClick }
        />
      </form>
    );
  }
}

export default Form;
