import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FiltersInputs extends Component {
  render() {
    const { nameFilter, handleChange } = this.props;
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
      </div>
    );
  }
}

FiltersInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default FiltersInputs;
