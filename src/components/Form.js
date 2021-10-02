import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form action="">
        <Input type="text" testid="name-input" name="Card Name" />
        <textarea
          data-testid="description-input"
          name="description"
          cols="30"
          rows="10"
          placeholder="description"
        />
        {/* <textarea type="textarea" name="Card Description" /> */}
        <Input type="number" testid="attr1-input" name="Attr 01" />
        <Input type="number" testid="attr2-input" name="Attr 02" />
        <Input type="number" testid="attr3-input" name="Attr 03" />
        <Input type="text" testid="image-input" name="Image" />
        <select name="rarity" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <Input type="checkbox" testid="trunfo-input" name="super triunfo" />
        <button type="button" data-testid="save-button" name="save">Salvar</button>
      </form>
    );
  }
}

export default Form;
