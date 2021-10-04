import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilterCards extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <input
        data-testid="name-filter"
        onChange={ onInputChange }
        type="text"
        name="filterName"
        id="name-filter"
      />
    );
  }
}
FilterCards.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default FilterCards;
