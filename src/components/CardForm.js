import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class CardForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cardFields: {
      cardName,
      description,
      cardStats,
      cardImage,
      cardRarity,
      superTrunfo } } = this.props;
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={ 3 } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

CardForm.propTypes = {
  cardFields: shape({
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
};

export default CardForm;
