import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Form from './Form';
import Card from './Card';

class CardEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { // level 0 change
      cardFields: { // level 1 change
        cardName: '',
        description: '',
        cardStats: { speed: 0, power: 0, weight: 0 }, // level 2 change
        cardImage: '',
        cardRarity: '',
        superTrunfo: false,
      },
    };
    this.handleCardFields = this.handleCardFields.bind(this);
  }

  handleCardFields(name, value) {
    this.setState((prevState) => (
      {
        ...prevState,
        cardFields: { // level 1 change
          ...prevState.cardFields,
          [name]: value,
        },
      }));

    // this.setState((prevState) => ({
    //   ...prevState,
    //   ...{ ...{ cardFields: { [name]: value } } },
    // }));
    console.log(name, value);
  }

  render() {
    const { cardFields } = this.state;
    return (
      <div className="main-card-editor">
        <Form cardFields={ cardFields } handleCardFields={ this.handleCardFields } />
        <Card cardFields={ cardFields } handleCardFields={ this.handleCardFields } />
      </div>
    );
  }
}

export default CardEditor;
