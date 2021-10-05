import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Form from './Form';
import Card from './Card';

const MAX_VALUE = 90;
const MAX_SUM = 210;
class CardEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  componentDidUpdate() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      isSaveButtonDisabled,
    } = this.state;
    const stringFieldValid = (cardName.length && cardDescription.length
      && cardImage.length);
    const validAttr = [cardAttr1, cardAttr2, cardAttr3]
      .every((attr) => (Number(attr) >= 0 && Number(attr) <= MAX_VALUE));

    const attrFieldValid = (Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) <= MAX_SUM) && validAttr;
    if (stringFieldValid && attrFieldValid && isSaveButtonDisabled) {
      this.onInputChange('isSaveButtonDisabled', false);
    }
    if (!isSaveButtonDisabled && (!stringFieldValid || !attrFieldValid)) {
      this.onInputChange('isSaveButtonDisabled', true);
    }
  }

  onInputChange(name, value) {
    this.setState((prevState) => ({ ...prevState, [name]: value }));
    if (name.includes(Attr)) console.log(name, value);
  }

  onSaveButtonClick(name) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: !prevState.isSaveButtonDisabled,
    }));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardStats,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="main-card-editor">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardStats={ cardStats }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardStats={ cardStats }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default CardEditor;
