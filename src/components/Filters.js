import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filters extends Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <div>
        <input type="text" data-testid="name-filter" onChange={ handleFilter } />
      </div>
    );
  }
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
