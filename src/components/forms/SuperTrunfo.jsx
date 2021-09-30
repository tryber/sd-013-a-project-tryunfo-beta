import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends React.Component {
  render() {
    const { cardTrunfo, handleClick } = this.props;

    return (
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="input-super-trunfo">
          <input
            type="checkbox"
            id="input-super-trunfo"
            checked={ cardTrunfo }
            onClick={ handleClick }
            data-testid="trunfo-input"
            className="form-check-input"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SuperTrunfo;
