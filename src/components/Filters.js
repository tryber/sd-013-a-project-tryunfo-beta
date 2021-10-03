import React, { Component } from 'react';

class Filters extends Component {
  render() {
    const { setFilterByName } = this.props;

    return (
      <form>
        <fieldset>
          <label>
            Buscar
            <input
              data-testid="name-filter"
              type="text"
              onChange={ ({ target }) => setFilterByName(target.value) }
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Filters;
