import React, { Component } from 'react';
import InputField from './InputField';

const rarity = ['normal', 'raro', 'muito raro'];

class Form extends Component {
  render() {
    return (
      <form>
        <InputField type="text" name="name" />
        <InputField type="textarea" name="description" />
        <InputField type="number" name="attr1" />
        <InputField type="number" name="attr2" />
        <InputField type="number" name="attr3" />
        <InputField type="image" name="image" />
        <label htmlFor="rare-input">
          rare
          <select name="rare" id="rare-input" data-testid="rare-input">
            { rarity.map((opt, i) => <option key={ i }>{ opt }</option>)}
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo
          <input
            type="radio"
            name="trunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
