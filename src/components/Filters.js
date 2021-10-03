import React, { Component } from 'react';

class Filters extends Component {
  render() {
    const RARE_FILTER = ['todas', 'normal', 'raro', 'muito raro'];
    const { onInputChange } = this.props;

    return (
      <form>
        <fieldset>
          <label htmlFor="filterName">
            Buscar
            <input
              data-testid="name-filter"
              type="text"
              onChange={ onInputChange }
              name="filterName"
              id="filterName"
            />
          </label>
          <label htmlFor="filterRare">
            Filtar por raridade
            <select
              onChange={ onInputChange }
              data-testid="rare-filter"
              name="filterRare"
              id="filterRare"
            >
              { RARE_FILTER.map((item, index) => <option key={ index }>{item}</option>) }
            </select>
          </label>
          <label htmlFor="filterTrunfo">
            Filtrar por trunfo
            <input
              onChange={ onInputChange }
              data-testid="trunfo-filter"
              type="checkbox"
              name="filterTrunfo"
              id="filterTrunfo"
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Filters;
