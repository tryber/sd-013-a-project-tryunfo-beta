import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CardForm from './CardForm';
import Card from './Card';

class CardEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFields: {
        cardName: '',
        description: '',
        numericInput: { speed: 0, power: 0, weight: 0 },
        cardImage: '',
        cardRarity: '',
        superTrunfo: false,
      },
    };
    this.handleCardFields = this.handleCardFields.bind(this);
  }

  handleCardFields(name, value) {
    this.setState({ ...prevState, [name]: value });
  }

  render() {
    const { cardFields } = this.state;
    return (
      <div className="main-card-editor">
        <CardForm cardFields={ cardFields } handleCardFields={ this.handleCardFields } />
        <Card cardFields={ cardFields } handleCardFields={ this.handleCardFields } />
      </div>
    );
  }
}

export default CardEditor;
