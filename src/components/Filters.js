import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filters extends Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          name="name"
          onChange={ handleFilter }
        />
        <select name="rarity" onChange={ handleFilter } data-testid="rare-filter">
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </div>
    );
  }
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
