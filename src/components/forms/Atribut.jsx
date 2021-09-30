import React from 'react';
import PropTypes from 'prop-types';

class Atribut extends React.Component {
  render() {
    const {
      handleChange,
      atribut1,
      atribut2,
      atribut3,
    } = this.props;

    return (
      <>
        <div className="mb-3">
          <label className="form-label" htmlFor="input-atribut-1">
            Attr1
            <input
              id="input-atribut-1"
              type="number"
              placeholder="primeiro atributo da carta"
              value={ atribut1 }
              name="atribut1"
              onChange={ handleChange }
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
              placeholder="segundo atributo da carta"
              value={ atribut2 }
              name="atribut2"
              onChange={ handleChange }
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
              placeholder="terceiro atributo da carta"
              value={ atribut3 }
              name="atribut3"
              onChange={ handleChange }
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
  atribut1: PropTypes.string.isRequired,
  atribut2: PropTypes.string.isRequired,
  atribut3: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Atribut;
