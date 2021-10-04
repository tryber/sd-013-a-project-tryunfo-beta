import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilterCards extends Component {
  render() {
    const { onInputChange, isCardTrunfo } = this.props;
    return (
      <>
        <input
          data-testid="name-filter"
          onChange={ onInputChange }
          type="text"
          name="filterName"
          id="name-filter"
          disabled={ isCardTrunfo ? 'treu' : '' }
        />
        <select
          data-testid="rare-filter"
          onChange={ onInputChange }
          type="select"
          name="filterRaridade"
          id="name-filter"
          disabled={ isCardTrunfo ? 'treu' : '' }
        >
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="isCardTrunfo"
            id="trunfo-filter"
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
      </>
    );
  }
}
FilterCards.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isCardTrunfo: PropTypes.bool.isRequired,
};

export default FilterCards;
