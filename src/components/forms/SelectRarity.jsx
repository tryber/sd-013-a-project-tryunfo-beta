import React from 'react';
import PropTypes from 'prop-types';

class SelectRarity extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;

    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-cardRare">
          Raridade
          <select
            name="cardRare"
            id="input-cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            className="form-select"
          >
            <option selected value="normal">
              normal
            </option>
            <option value="raro">
              raro
            </option>
            <option value="muito raro">
              muito raro
            </option>
          </select>
        </label>

      </div>
    );
  }
}

SelectRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SelectRarity;
