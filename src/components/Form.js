import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          type="text"
          testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          type="textarea"
          testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          type="number"
          testid="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          testid="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Input
          type="select"
          testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        />
        <Input
          type="checkbox"
          testid="trunfo-input"
          name="cardTrunfo"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
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
  cardTrunfo: PropTypes.oneOfType([
    PropTypes.string, PropTypes.bool,
  ]).isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
