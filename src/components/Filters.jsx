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
            id="filterByName"
            data-testid="name-filter"
            placeholder="Nome da carta"
            onChange={ onFilterChange }
          />
          <select
            name="rarity"
            id="filterByRarity"
            data-testid="rare-filter"
            onChange={ onFilterChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <label htmlFor="filterByTrunfo">
            <input
              type="checkbox"
              id="filterByTrunfo"
              data-testid="trunfo-filter"
              onChange={ onFilterChange }
            />
            Super Trunfo
          </label>
        </form>
      </div>
    );
  }
}

export default Filters;

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
