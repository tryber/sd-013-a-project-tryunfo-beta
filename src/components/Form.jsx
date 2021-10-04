import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

const rarity = ['normal', 'raro', 'muito raro'];

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <InputField
          type="text"
          name="name"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <InputField
          type="textarea"
          name="description"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <InputField
          type="number"
          name="attr1"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <InputField
          type="number"
          name="attr2"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <InputField
          type="number"
          name="attr3"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <InputField
          type="text"
          name="image"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          rare
          <select
            name="rare"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            { rarity.map((opt, i) => <option key={ i }>{ opt }</option>)}
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick() }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
