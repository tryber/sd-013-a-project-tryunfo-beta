import React from 'react';
import PropTypes from 'prop-types';

class Atribut extends React.Component {
  render() {
    const {
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.props;

    return (
      <>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-atribut-1">
            Attr1
            <input
              id="input-atribut-1"
              type="number"
              max="90"
              min="0"
              placeholder="primeiro atributo da carta"
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              data-testid="attr1-input"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-atribut-2">
            Attr2
            <input
              id="input-atribut-2"
              type="number"
              max="90"
              min="0"
              placeholder="segundo atributo da carta"
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
              data-testid="attr2-input"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-atribut-3">
            Attr3
            <input
              id="input-atribut"
              type="number"
              max="90"
              min="0"
              placeholder="terceiro atributo da carta"
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
              data-testid="attr3-input"
              className="form-control"
            />
          </label>
        </div>
      </>
    );
  }
}

Atribut.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Atribut;
