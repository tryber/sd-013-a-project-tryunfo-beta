import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.renderInputTextArea = this.renderInputTextArea.bind(this);
    this.renderInputSelect = this.renderInputSelect.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderInput(title, testId, type) {
    return (
      <label htmlFor={ title }>
        {title}
        <input id={ title } type={ type } data-testid={ testId } />
      </label>
    );
  }

  renderInputTextArea(title, testId) {
    return (
      <label htmlFor={ title }>
        {title}
        <textarea id={ title } type="text" data-testid={ testId } />
      </label>
    );
  }

  renderInputSelect(title, testId, array) {
    return (
      <label htmlFor={ title }>
        {title}
        <select id={ title } data-testid={ testId }>
          {array.map((e, i) => <option key={ i }>{e}</option>)}
        </select>
      </label>
    );
  }

  renderButton(title) {
    return (
      <button type="button" data-testid="save-button">{title}</button>
    );
  }

  render() {
    const RARE = ['normal', 'raro', 'muito raro'];
    return (
      <div>
        {this.renderInput('Nome', 'name-input', 'text')}
        {this.renderInputTextArea('Descrição', 'description-input')}
        {this.renderInput('Attr1', 'attr1-input', 'number')}
        {this.renderInput('Attr2', 'attr2-input', 'number')}
        {this.renderInput('Attr3', 'attr3-input', 'number')}
        {this.renderInput('Imagem', 'image-input', 'text')}
        {this.renderInputSelect('Raridade', 'rare-input', RARE)}
        {this.renderInput('Super Trybe Trunfo', 'trunfo-input', 'checkbox')}
        {this.renderButton('Salvar')}
      </div>
    );
  }
}

export default Form;
