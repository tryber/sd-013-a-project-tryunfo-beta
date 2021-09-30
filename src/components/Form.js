import React, { Component } from 'react';
import { Input } from '.';

export class Form extends Component {
  render() {
    return (
      <form>
        <Input type="text" testid="name-input" name="name" />
        <Input type="textarea" testid="description-input" name="description" />
        <Input type="number" testid="attr1-input" name="attr1" />
        <Input type="number" testid="attr2-input" name="attr2" />
        <Input type="number" testid="attr3-input" name="attr3" />
        <Input type="text" testid="image-input" name="image" />
        <Input type="select" testid="rare-input" name="rare" />
        <Input type="checkbox" testid="trunfo-input" name="trunfo" />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
