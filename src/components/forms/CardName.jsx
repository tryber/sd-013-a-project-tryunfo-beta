import React from 'react';
import PropTypes from 'prop-types';

class CardName extends React.Component {
  render() {
    const { cardName, handleChange } = this.props;

    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-card">
          Nome
          <input
            id="input-card"
            type="text"
            placeholder="Insira o nome da carta"
            value={ cardName }
            name="cardName"
            onChange={ handleChange }
            data-testid="name-input"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CardName;
