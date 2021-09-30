import React from 'react';
import './Forms.css';

class Form extends React.Component {
  render() {
    return (
      <fieldset className="field-form">

        <h2>Add nova carta</h2>

        <input placeholder="Nome" type="text" data-testid="name-input" />
        <input placeholder="Descrição" type="text" data-testid="description-input" />
        <input placeholder="Primeiro Atributo" type="number" data-testid="attr1-input" />
        <input placeholder="Segundo Atributo" type="number" data-testid="attr2-input" />
        <input placeholder="Terceiro Atributo" type="number" data-testid="attr3-input" />
        <input placeholder="Imagem" type="text" data-testid="image-input" />

        <select type="select" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <label htmlFor="trunfo">
          <input type="checkbox" data-testid="trunfo-input" id="trunfo" />
          Super Trybe-Trunfo?
        </label>

        <button type="button" data-testid="save-button">Salvar</button>

      </fieldset>
    );
  }
}

export default Form;
