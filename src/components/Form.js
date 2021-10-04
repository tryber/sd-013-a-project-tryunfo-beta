import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as RForm, Button, Col, Row } from 'react-bootstrap';

const RARITY_OPTIONS = ['normal', 'raro', 'muito raro'];
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
    this.renderAttributes = this.renderAttributes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    const { handleCardFields } = this.props;
    handleCardFields(name, value);
  }

  handleSubmit(e) {
    // console.log(e);
    e.preventDefault();
    const f = e.currentTarget;
    if (f.checkValidity()) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
  }

  handleOnClick() {

  }

  renderAttributes(cardStats) { // attributes = [ [speed,0],[power,2],[weight,220] ]
    const { handleCardFields } = this.props;
    const attributes = Object.entries(cardStats);
    return attributes.map((attribute, index) => {
      const attrName = attribute[0];
      const attrValue = attribute[1];
      return (
        <RForm.Group
          as={ Row }
          key={ `${attrName}-X-${attrValue}-${index}` }
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <RForm.Label column sm="1" data-testid={ `attr${index + 1}-input` }>
            {attrName}
          </RForm.Label>
          <Col sm="2">
            <RForm.Control
              name={ attrName }
              type="number"
              value={ attrValue }
              onChange={ ({ target: { name, value } }) => {
                // os atributos numéricos precisam de um tratamento específico, pois tem mais 1 camda de objeto
                // cardFiels: { cardStats: {atributes}}
                const checkValue = Number(value) || 0;
                const newCardStats = { ...cardStats, [name]: checkValue };
                handleCardFields('cardStats', newCardStats);
              } }
              min="1"
              required
            />
          </Col>
        </RForm.Group>);
    });
  }

  render() {
    const { validated } = this.state;
    const {
      handleCardFields,
      cardFields: {
        cardName,
        description,
        cardStats,
        cardImage,
        cardRarity,
      },
    } = this.props;

    return (
      <RForm noValidate validated={ validated } onSubmit={ this.handleSubmit }>
        <RForm.Group as={ Row } className="mb-3" controlId="FormBasicName">
          <RForm.Label column sm="1" data-testid="name-input">Card Name</RForm.Label>
          <Col sm="2">
            <RForm.Control
              name="cardName"
              type="text"
              placeholder="Card Name"
              value={ cardName }
              onChange={ ({ target: { name, value } }) => handleCardFields(name, value) }
              required
            />
          </Col>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </RForm.Group>
        {this.renderAttributes(cardStats)}
        <RForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <RForm.Label data-testid="description-input">Description</RForm.Label>
          <RForm.Control
            name="description"
            as="textarea"
            rows={ 6 }
            style={ { width: '25%' } }
            onChange={ ({ target: { name, value } }) => handleCardFields(name, value) }
            value={ description }
            required
          />
        </RForm.Group>
        <RForm.Group as={ Row } className="mb-3" controlId="formBasicImagePath">
          <RForm.Label column sm="1">ImagePath</RForm.Label>
          <Col sm="2">
            <RForm.Control
              name="cardImage"
              type="text"
              placeholder="ImagePath"
              data-testid="image-input"
              onChange={ ({ target: { name, value } }) => handleCardFields(name, value) }
              value={ cardImage }
            />
          </Col>
        </RForm.Group>
        <RForm.Group as={ Row } className="mb-3" controlId="inlineFormCustomSelect">
          <RForm.Label column sm="1">Raridade</RForm.Label>
          <Col sm="2">
            <RForm.Select
              name="cardRarity"
              className="me-sm-2"
              id="inlineFormCustomSelect"
              data-testid="rare-input"
              onChange={ ({ target: { name, value } }) => handleCardFields(name, value) }
              value={ cardRarity }
            >
              {RARITY_OPTIONS.map((rarity, index) => (
                <option key={ `${rarity}-${index}` } value={ rarity }>{rarity}</option>))}
            </RForm.Select>
          </Col>
        </RForm.Group>
        <RForm.Group className="mb-3" controlId="formBasicCheckbox">
          <RForm.Check
            name="superTrunfo"
            type="checkbox"
            label="Super Trunfo"
            data-testid="trunfo-input"
            onClick={ ({ target: { name, checked } }) => handleCardFields(name, checked) }
          />
        </RForm.Group>
        <Button variant="primary" type="submit" data-testid="save-button">
          Save
        </Button>
      </RForm>
    );
  }
}
Form.propTypes = {
  cardFields: PropTypes.shape({
    cardName: PropTypes.string,
    description: PropTypes.string,
    cardStats: PropTypes.shape({
      speed: PropTypes.number,
      power: PropTypes.number,
      weight: PropTypes.number,
    }),
    cardImage: PropTypes.string,
    cardRarity: PropTypes.string,
    superTrunfo: PropTypes.bool }).isRequired,
  handleCardFields: PropTypes.func.isRequired,
};
export default Form;
