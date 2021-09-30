import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.renderInputTextArea = this.renderInputTextArea.bind(this);
    this.renderInputSelect = this.renderInputSelect.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderInputCheckBox = this.renderInputCheckBox.bind(this);
  }

  renderInput({ title, testId, type, value, onChange, name }) {
    return (
      <label htmlFor={ name }>
        {title}
        <input
          value={ value }
          onChange={ onChange }
          id={ name }
          type={ type }
          data-testid={ testId }
        />
      </label>
    );
  }

  renderInputTextArea({ title, testId, value, onChange, name }) {
    return (
      <label htmlFor={ name }>
        {title}
        <textarea
          value={ value }
          onChange={ onChange }
          id={ name }
          type="text"
          data-testid={ testId }
        />
      </label>
    );
  }

  renderInputSelect({ title, testId, array, name, onChange, value }) {
    return (
      <label htmlFor={ name }>
        {title}
        <select value={ value } onChange={ onChange } id={ name } data-testid={ testId }>
          {array.map((e, i) => <option key={ i }>{e}</option>)}
        </select>
      </label>
    );
  }

  renderInputCheckBox({ title, testId, checked, onChange, name }) {
    return (
      <label htmlFor={ name }>
        {title}
        <input
          checked={ checked }
          onChange={ onChange }
          id={ name }
          type="checkbox"
          data-testid={ testId }
        />
      </label>
    );
  }

  renderButton({ title, disabled, onClick }) {
    return (
      <button
        type="button"
        data-testid="save-button"
        disabled={ disabled }
        onClick={ onClick }
      >
        {title}
      </button>
    );
  }

  render() {
    const RARE = ['normal', 'raro', 'muito raro'];
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
    // console.log(cardName);
    return (
      <form>
        <fieldset>
          {this.renderInput({
            title: 'Nome',
            testId: 'name-input',
            type: 'text',
            value: cardName,
            onChange: onInputChange,
            name: 'cardName' })}
          {this.renderInputTextArea({
            title: 'Descrição',
            testId: 'description-input',
            value: cardDescription,
            onChange: onInputChange,
            name: 'cardDescription' })}
          {this.renderInput({
            title: 'Attr1',
            testId: 'attr1-input',
            type: 'number',
            value: cardAttr1,
            onChange: onInputChange,
            name: 'cardAttr1' })}
          {this.renderInput({
            title: 'Attr2',
            testId: 'attr2-input',
            type: 'number',
            value: cardAttr2,
            onChange: onInputChange,
            name: 'cardAttr2' })}
          {this.renderInput({
            title: 'Attr3',
            testId: 'attr3-input',
            type: 'number',
            value: cardAttr3,
            onChange: onInputChange,
            name: 'cardAttr3' })}
          {this.renderInput({
            title: 'Image',
            testId: 'image-input',
            type: 'text',
            value: cardImage,
            onChange: onInputChange,
            name: 'cardImage' })}
          {this.renderInputSelect({
            title: 'Raridade',
            testId: 'rare-input',
            array: RARE,
            value: cardRare,
            onChange: onInputChange,
            name: 'cardRare' })}
          { !hasTrunfo
            ? this.renderInputCheckBox({
              title: 'Super Trybe Trunfo',
              testId: 'trunfo-input',
              checked: cardTrunfo,
              onChange: onInputChange,
              name: 'cardTrunfo' })
            : <p>Você já tem um Super Trunfo em seu baralho</p>}
          {this.renderButton({
            title: 'Salvar',
            disabled: isSaveButtonDisabled,
            onClick: onSaveButtonClick })}
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
