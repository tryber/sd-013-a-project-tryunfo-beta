import React from 'react';
import PropTypes from 'prop-types';

class SelectRarity extends React.Component {
  render() {
    const { rarity, handleChange } = this.props;

    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-rarity">
          Raridade
          <select
            name="rarity"
            id="input-rarity"
            value={ rarity }
            onChange={ handleChange }
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
  rarity: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectRarity;
