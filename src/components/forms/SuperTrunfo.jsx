import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;

    return (
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="input-super-trunfo">
          <input
            type="checkbox"
            id="input-super-trunfo"
            checked={ cardTrunfo }
            name="trunfo"
            onChange={ onInputChange }
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
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
