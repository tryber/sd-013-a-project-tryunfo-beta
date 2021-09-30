import React from 'react';
import './Forms.css';

class Form extends React.Component {
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
      <fieldset className="field-form">

        <h2>Add nova carta</h2>

        <input
          placeholder="Nome"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <input
          placeholder="Descrição"
          type="text"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          placeholder="Primeiro Atributo"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          placeholder="Segundo Atributo"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          placeholder="Terceiro Atributo"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          placeholder="Imagem"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          type="select"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <label htmlFor="trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe-Trunfo?
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </fieldset>
    );
  }
}

export default Form;
