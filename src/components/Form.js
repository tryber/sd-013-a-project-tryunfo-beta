import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form action="">
        <Input
          type="text"
          testid="name-input"
          name="cardName"
          onChange={ onInputChange }
          value={ cardName }
        />
        <textarea
          data-testid="description-input"
          name="cardDescription"
          cols="30"
          rows="10"
          placeholder="description"
          onChange={ (e) => onInputChange(e) }
          value={ cardDescription }
        />
        <Input
          type="number"
          testid="attr1-input"
          name="cardAttr1"
          onChange={ onInputChange }
          value={ cardAttr1 }
        />
        <Input
          type="number"
          testid="attr2-input"
          name="cardAttr2"
          onChange={ onInputChange }
          value={ cardAttr2 }
        />
        <Input
          type="number"
          testid="attr3-input"
          name="cardAttr3"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />
        <Input
          type="text"
          testid="image-input"
          name="cardImage"
          onChange={ onInputChange }
          value={ cardImage }
        />
        <select
          name="cardRare"
          value={ cardRare }
          data-testid="rare-input"
          onChange={ (e) => onInputChange(e) }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <Input
          type="checkbox"
          testid="trunfo-input"
          name="cardTrunfo"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick() }
          data-testid="save-button"
          name="save"
        >
          Salvar
        </button>
      </form>
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
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
