import React from 'react';
import { Input } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Input
          name="cartName"
          label="Nome da carta"
          placeholder="Insira o nome da carta"
          testId="name-input"
        />
        <Input
          name="cartDescription"
          label="Descrição da carta"
          placeholder="Insira a descrição da carta"
          testId="description-input"
          type="textarea"
        />
        <Input
          name="cartAttr1"
          label="Primeiro atributo da carta"
          placeholder="Insira o primeiro atributo da carta"
          testId="attr1-input"
          type="number"
        />
        <Input
          name="cartAttr2"
          label="Segundo atributo da carta"
          placeholder="Insira o segundo atributo da carta"
          testId="attr2-input"
          type="number"
        />
        <Input
          name="cartAttr3"
          label="Terceiro atributo da carta"
          placeholder="Insira o terceiro atributo da carta"
          testId="attr3-input"
          type="number"
        />
        <Input
          name="cartImage"
          label="Imagem da carta"
          placeholder="Insira a imagem da carta"
          testId="image-input"
        />
        <Input
          name="cartRarity"
          label="Raridade da carta"
          placeholder="Insira a raridade da carta"
          testId="rare-input"
          type="select"
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <Input
          name="cartTryunfo"
          label="Carta triunfada"
          placeholder="Carta Super Triunfo"
          testId="trunfo-input"
          type="checkbox"
        />
        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </main>
    );
  }
}

export default App;
