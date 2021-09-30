import React from 'react';
import Atribut from './forms/Atribut';
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
      description: '',
      atribut1: '',
      atribut2: '',
      atribut3: '',
      imagePath: '',
      rarity: 'normal',
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  }

  handleForm() {
    console.log('click');
  }

  render() {
    const {
      cardName, description, atribut1, atribut2, atribut3, imagePath, rarity, checked,
    } = this.state;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <CardName
          handleChange={ this.handleChange }
          cardName={ cardName }
        />
        <Description
          handleChange={ this.handleChange }
          description={ description }
        />
        <Atribut
          handleChange={ this.handleChange }
          atribut1={ atribut1 }
          atribut={ atribut2 }
          atribut3={ atribut3 }
        />
        <CardImage
          handleChange={ this.handleChange }
          imagePath={ imagePath }
        />
        <SelectRarity
          handleChange={ this.handleChange }
          rarity={ rarity }
        />
        <SuperTrunfo
          checked={ checked }
          handleClick={ this.handleClick }
        />
        <button
          type="button"
          onClick={ this.handleForm }
          data-testid="save-button"
          className="btn btn-outline-dark"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
