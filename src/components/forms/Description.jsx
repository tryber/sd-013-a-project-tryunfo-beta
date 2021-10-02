import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onInputChange, cardDescription } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-cardDescription">
          <textarea
            name="cardDescription"
            id="input-cardDescription"
            cols="30"
            rows="5"
            placeholder="Insira uma descrição para a carta"
            maxLength="100"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Description;
