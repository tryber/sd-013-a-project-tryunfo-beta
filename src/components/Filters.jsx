import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { onFilterChange } = this.props;
    return (
      <div>
        <form className="deck-filter">
          <h4>Filtros de busca</h4>
          <input
            type="text"
            data-testid="name-filter"
            id="filterByName"
            placeholder="Nome da carta"
            onChange={ onFilterChange }
          />

        </form>
      </div>
    );
  }
}

export default Filters;

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
