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

  renderInput({ title, testId, type, value, onChange }) {
    return (
      <label htmlFor={ title }>
        {title}
        <input
          value={ value }
          onChange={ onChange }
          id={ title }
          type={ type }
          data-testid={ testId }
        />
      </label>
    );
  }

  renderInputTextArea({ title, testId }) {
    return (
      <label htmlFor={ title }>
        {title}
        <textarea id={ title } type="text" data-testid={ testId } />
      </label>
    );
  }

  renderInputSelect({ title, testId, array }) {
    return (
      <label htmlFor={ title }>
        {title}
        <select id={ title } data-testid={ testId }>
          {array.map((e, i) => <option key={ i }>{e}</option>)}
        </select>
      </label>
    );
  }

  renderInputCheckBox({ title, testId, value, onChange }) {
    return (
      <label htmlFor={ title }>
        {title}
        <input
          checked={ value }
          onChange={ onChange }
          id={ title }
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
    // const { data: {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick,
    // } } = this.props;
    return (
      <div>
        {this.renderInput({
          title: 'Nome',
          testId: 'name-input',
          type: 'text',
          value: cardName,
          onChange: onInputChange })}
        {this.renderInputTextArea({
          title: 'Descrição',
          testId: 'description-input',
          value: cardDescription,
          onChange: onInputChange })}
        {this.renderInput({
          title: 'Attr1',
          testId: 'attr1-input',
          type: 'number',
          value: cardAttr1,
          onChange: onInputChange })}
        {this.renderInput({
          title: 'Attr2',
          testId: 'attr2-input',
          type: 'number',
          value: cardAttr2,
          onChange: onInputChange })}
        {this.renderInput({
          title: 'Attr3',
          testId: 'attr3-input',
          type: 'number',
          value: cardAttr3,
          onChange: onInputChange })}
        {this.renderInput({
          title: 'Image',
          testId: 'image-input',
          type: 'text',
          value: cardImage,
          onChange: onInputChange })}
        {this.renderInputSelect({
          title: 'Raridade',
          testId: 'rare-input',
          array: RARE,
          value: cardRare,
          onChange: onInputChange })}
        {this.renderInputCheckBox({
          title: 'Super Trybe Trunfo',
          testId: 'trunfo-input',
          checked: cardTrunfo,
          onChange: onInputChange })}
        {this.renderButton({
          title: 'Salvar',
          disabled: isSaveButtonDisabled,
          onClick: onSaveButtonClick })}
      </div>
    );
  }
}

Form.propTypes = {
  data: PropTypes.shape({}),
}.isRequired;

export default Form;
