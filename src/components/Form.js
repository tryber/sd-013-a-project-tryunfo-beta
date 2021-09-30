import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, cardName, cardImage, cardDescription,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <div>
        <label htmlFor="name">
          Name:
          <input
            onChange={ onInputChange }
            value={ cardName }
            id="name"
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            onChange={ onInputChange }
            value={ cardDescription }
            id="description"
            data-testid="description-input"
            type="textarea"
          />
        </label>
        <label htmlFor="attr1">
          Attribute 1:
          <input
            onChange={ onInputChange }
            value={ cardAttr1 }
            id="attr1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          Attribute 2:
          <input
            onChange={ onInputChange }
            value={ cardAttr2 }
            id="attr2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          Attribute 3:
          <input
            onChange={ onInputChange }
            value={ cardAttr3 }
            id="attr3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            onChange={ onInputChange }
            value={ cardImage }
            id="image"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare">
          Rarity:
          <select
            onChange={ onInputChange }
            value={ cardRare }
            id="rare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { (hasTrunfo) ? <span>Você já tem um Super Trunfo em seu baralho</span> : (
          <label htmlFor="trunfo">
            Trunfo:
            <input
              onChange={ onInputChange }
              checked={ cardTrunfo }
              id="trunfo"
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>)}
        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
};
