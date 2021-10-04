import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilterCards extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <>
        <input
          data-testid="name-filter"
          onChange={ onInputChange }
          type="text"
          name="filterName"
          id="name-filter"
        />
        <select
          data-testid="rare-filter"
          onChange={ onInputChange }
          type="select"
          name="filterRaridade"
          id="name-filter"
        >
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </>
    );
  }
}
FilterCards.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default FilterCards;
