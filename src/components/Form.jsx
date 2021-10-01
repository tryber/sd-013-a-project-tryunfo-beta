import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick() {
    console.log('n.a');
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <input
          value={ cardName }
          onChange={ onInputChange }
          type="text"
          data-testid="name-input"
        />
        <input
          value={ cardDescription }
          onChange={ onInputChange }
          type="textarea"
          data-testid="description-input"
        />
        <input
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr1-input"
        />
        <input
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr2-input"
        />
        <input
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          data-testid="attr3-input"
        />
        <input
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          data-testid="image-input"
        />
        <select
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
          checked={ cardTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          data-testid="trunfo-input"
        />
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick() }
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
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
