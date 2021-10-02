import React, { Component } from 'react';
import { AttrInput,
  DescriptionInput, ImageInput, NameInput, RareInput, TrunfoInput } from '../components';

export class Form extends Component {
  render() {
    const { state } = this.props;
    console.log('state', state);
    return (
      <form>
        <fieldset>
          <NameInput />
          <br />
          <DescriptionInput />
          <br />
          <AttrInput index="1" />
          <br />
          <AttrInput index="2" />
          <br />
          <AttrInput index="3" />
          <br />
          <ImageInput />
          <br />
          <RareInput />
          <br />
          <TrunfoInput />
          <br />
          <button type="button" data-testid="save-button">Salvar</button>

        </fieldset>
      </form>
    );
  }
}

export default Form;
