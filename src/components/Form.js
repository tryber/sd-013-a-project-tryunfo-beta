import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as RForm, Button, Col, Row } from 'react-bootstrap';

const RARITY_OPTIONS = ['normal', 'raro', 'muito raro'];
class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = { validated: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    const { onInputChange } = this.props;
    onInputChange(name, value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget; // https://react-bootstrap.github.io/components/forms/
    if (form.checkValidity()) {
      console.log('Valid');
      const { onSaveButtonClick } = this.props;
      const { target: { name, value } } = e;
      onSaveButtonClick(name, value);
    } else {
      console.log('Invalid');
    }
  }

  render() {
    // const { validated } = this.state;
    const {
      onInputChange,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <RForm
        // noValidate
        // validated={ validated }
        onSubmit={ this.handleSubmit }
        className="card-form"
        disabled={ isSaveButtonDisabled }
      >
        <RForm.Group as={ Row } className="mb-3" controlId="FormBasicName">
          <RForm.Label column sm="2">Card Name</RForm.Label>
          <Col sm="6">
            <RForm.Control
              data-testid="name-input"
              name="cardName"
              type="text"
              placeholder="Card Name"
              value={ cardName }
              onChange={ ({ target: { name, value } }) => onInputChange(name, value) }
              required
            />
          </Col>
        </RForm.Group>
        <RForm.Group
          as={ Row }
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <RForm.Label column sm="2">cardAttr1</RForm.Label>
          <Col sm="8">
            <RForm.Control
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ ({ target: { name, value } }) => {
                // const checkValue = Number(value);
                // if (checkValue > 90) return 90;
                // if (checkValue < 0) return 0;
                onInputChange(name, value);
              } }
              required
            />
          </Col>
        </RForm.Group>
        <RForm.Group
          as={ Row }
          className="mb-3"
          controlId="exampleForm.ControlTextarea2"
        >
          <RForm.Label column sm="2">cardAttr2</RForm.Label>
          <Col sm="8">
            <RForm.Control
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ ({ target: { name, value } }) => {
                // if (checkValue > 90) return 90;
                // if (checkValue < 0) return 0;
                onInputChange(name, value);
              } }
              required
            />
          </Col>
        </RForm.Group>
        <RForm.Group
          as={ Row }
          className="mb-3"
          controlId="exampleForm.ControlTextarea3"
        >
          <RForm.Label column sm="2">cardAttr3</RForm.Label>
          <Col sm="8">
            <RForm.Control
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ Number(cardAttr3) }
              onChange={ ({ target: { name, value } }) => {
                const checkValue = Number(value);
                // if (checkValue > 90) return 90;
                // if (checkValue < 0) return 0;
                onInputChange(name, checkValue);
              } }
              required
            />
          </Col>
        </RForm.Group>
        <RForm.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <RForm.Label>Description</RForm.Label>
          <RForm.Control
            name="cardDescription"
            data-testid="description-input"
            as="textarea"
            rows={ 6 }
            style={ { width: '95%' } }
            onChange={ ({ target: { name, value } }) => onInputChange(name, value) }
            value={ cardDescription }
            required
          />
        </RForm.Group>
        <RForm.Group as={ Row } className="mb-3" controlId="formBasicImagePath">
          <RForm.Label column sm="2">ImagePath</RForm.Label>
          <Col sm="6">
            <RForm.Control
              name="cardImage"
              type="text"
              placeholder="ImagePath"
              data-testid="image-input"
              onChange={ ({ target: { name, value } }) => onInputChange(name, value) }
              value={ cardImage }
            />
          </Col>
        </RForm.Group>
        <RForm.Group as={ Row } className="mb-3" controlId="inlineFormCustomSelect">
          <RForm.Label column sm="2">Raridade</RForm.Label>
          <Col sm="3">
            <RForm.Select
              name="cardRare"
              className="me-sm-2"
              id="inlineFormCustomSelect"
              data-testid="rare-input"
              onChange={ ({ target: { name, value } }) => onInputChange(name, value) }
              value={ cardRare }
            >
              {RARITY_OPTIONS.map((rarity, index) => (
                <option key={ `${rarity}-${index}` } value={ rarity }>{rarity}</option>))}
            </RForm.Select>
          </Col>
        </RForm.Group>
        <RForm.Group className="mb-3" controlId="formBasicCheckbox">
          <RForm.Check
            name="cardTrunfo"
            type="checkbox"
            label="Super Trunfo"
            data-testid="trunfo-input"
            onChange={ ({ target: { name, checked } }) => onInputChange(name, checked) }
            checked={ cardTrunfo }
            variant="dark"
          />
        </RForm.Group>
        <Button
          variant="dark"
          type="submit"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          size="lg"
        >
          Save
        </Button>
      </RForm>
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
  onInputChange: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
export default Form;
