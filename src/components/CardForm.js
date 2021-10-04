import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

const RARITY_OPTIONS = ['normal', 'raro', 'muito raro'];
class CardForm extends Component {
  constructor(props) {
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
  }

  renderAttributes(attributes) { // attributes = [ [speed,0],[power,2],[weight,220] ]
    return attributes.map((attribute, index) => {
      const attrName = attribute[0];
      const attrValue = attribute[1];
      return (
        <Form.Group
          as={ Row }
          key={ `${attrName}-X-${attrValue}-${index}` }
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label column sm="1" data-testid={ `attr${index + 1}-input` }>
            {attrName}
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              value={ attrValue }
            />
          </Col>
        </Form.Group>);
    });
  }

  render() {
    const { cardFields: {
      cardName,
      description,
      cardStats,
      cardImage,
      cardRarity,
      superTrunfo } } = this.props;
    const attributes = Object.entries(cardStats);
    // console.log(attributes, 'atributes');
    return (
      <Form>
        <Form.Group as={ Row } className="mb-3" controlId="formBasicName">
          <Form.Label column sm="1" data-testid="name-input">Card Name</Form.Label>
          <Col sm="2">
            <Form.Control type="text" placeholder="Card Name" />
          </Col>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        {this.renderAttributes(attributes)}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label data-testid="description-input">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={ 6 }
            style={ { width: '25%' } }
          />
        </Form.Group>
        <Form.Group as={ Row } className="mb-3" controlId="formBasicImagePath">
          <Form.Label column sm="1">ImagePath</Form.Label>
          <Col sm="2">
            <Form.Control type="text" placeholder="ImagePath" data-testid="image-input" />
          </Col>
        </Form.Group>
        <Form.Group as={ Row } className="mb-3" controlId="inlineFormCustomSelect">
          <Form.Label column sm="1">Raridade</Form.Label>
          <Col sm="2">
            <Form.Select
              className="me-sm-2"
              id="inlineFormCustomSelect"
              data-testid="rare-input"
            >
              {RARITY_OPTIONS.map((rarity, index) => (
                <option key={ `${rarity}-${index}` } value={ rarity }>{rarity}</option>))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Super Trunfo" data-testid="trunfo-input" />
        </Form.Group>
        <Button variant="primary" data-testid="save-button">
          Save
        </Button>
      </Form>
    );
  }
}

export default CardForm;
