import React from 'react';
import PropTypes from 'prop-types';

class CardName extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-card">
          Nome da carta
          <input
            id="input-card"
            type="text"
            placeholder="Insira o nome da carta"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
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
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
