import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form className="card-input-form">
        <h3>Adicionar nova carta</h3>
        <Input idx={ 0 } value={ cardName } onChange={ onInputChange } />
        <Input idx={ 1 } value={ cardDescription } onChange={ onInputChange } />
        <Input idx={ 2 } value={ cardAttr1 } onChange={ onInputChange } />
        <Input idx={ 3 } value={ cardAttr2 } onChange={ onInputChange } />
        <Input idx={ 4 } value={ cardAttr3 } onChange={ onInputChange } />
        <Input idx={ 5 } value={ cardImage } onChange={ onInputChange } />

        <p>Raridade</p>
        <select
          name="rarity"
          id="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        {hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : (
          <label htmlFor="cardTrunfo">
            <input
              type="checkbox"
              id="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        )}

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
