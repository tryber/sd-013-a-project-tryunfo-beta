import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <input
          value={ cardName }
          id="cardName"
          onChange={ onInputChange }
          type="text"
          data-testid="name-input"
        />
        <input
          id="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          type="textarea"
          data-testid="description-input"
        />
        <input
          id="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr1-input"
        />
        <input
          id="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr2-input"
        />
        <input
          id="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr3-input"
        />
        <input
          id="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          data-testid="image-input"
        />
        <select
          id="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          type="select"
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          data-testid="trunfo-input"
        />
        <button
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
