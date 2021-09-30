import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FiltersInputs extends Component {
  render() {
    const { nameFilter, handleChange, rareFilter } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          Filtrar Por Nome:
          <input
            onChange={ handleChange }
            value={ nameFilter }
            id="nameFilter"
            data-testid="name-filter"
            type="text"
          />
        </label>
        <label htmlFor="rareFilter">
          Filtrar Por Nome:
          <select
            onChange={ handleChange }
            value={ rareFilter }
            id="rareFilter"
            data-testid="rare-filter"
            type="text"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

FiltersInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default FiltersInputs;
