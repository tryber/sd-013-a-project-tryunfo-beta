import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from '../Input';

export class Form extends Component {
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
      hasTriunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <section>
        <Input
          name="cardName"
          label="Nome da carta"
          placeholder="Insira o nome da carta"
          testId="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          name="cardDescription"
          label="Descrição da carta"
          placeholder="Insira a descrição da carta"
          testId="description-input"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr1"
          label="Primeiro atributo da carta"
          placeholder="Insira o primeiro atributo da carta"
          testId="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr2"
          label="Segundo atributo da carta"
          placeholder="Insira o segundo atributo da carta"
          testId="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          label="Terceiro atributo da carta"
          placeholder="Insira o terceiro atributo da carta"
          testId="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          name="cardImage"
          label="Imagem da carta"
          placeholder="Insira a imagem da carta"
          testId="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          name="cardRarity"
          label="Raridade da carta"
          placeholder="Insira a raridade da carta"
          testId="rare-input"
          type="select"
          options={ ['normal', 'raro', 'muito raro'] }
          value={ cardRare }
          onChange={ onInputChange }
        />
        <Input
          name="cardTrunfo"
          label="Carta triunfada"
          placeholder="Carta Super Triunfo"
          testId="trunfo-input"
          type="checkbox"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          data-testid="save-button"
          type="button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </section>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTriunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
