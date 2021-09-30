import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor="input-description">
          Descrição
          <textarea
            name="description"
            id="input-description"
            cols="30"
            rows="5"
            placeholder="Insira uma descrição para a carta"
            value={ description }
            onChange={ handleChange }
            data-testid="description-input"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
