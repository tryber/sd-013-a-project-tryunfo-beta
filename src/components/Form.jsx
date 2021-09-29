import React, { Component } from 'react';
import { Input } from '.';

class Form extends Component {
  render() {
    return (
      <form className="card-input-form">
        <h3>Adicionar nova carta</h3>
        <Input idx={ 0 } />
        <Input idx={ 1 } />
        <Input idx={ 2 } />
        <Input idx={ 3 } />
        <Input idx={ 4 } />
        <Input idx={ 5 } />
        <label htmlFor="rarity">
          Raridade
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
