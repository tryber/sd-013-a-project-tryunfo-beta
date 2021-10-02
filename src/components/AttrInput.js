import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class AttrInput extends Component {
  render() {
    const { index, state: { onInputChange }, state } = this.props;
    return (
      <label htmlFor={ `attr${index}-input` }>
        {`Attr0${index}`}
        <input
          data-testid={ `attr${index}-input` }
          type="number"
          name={ `cardAttr${index}` }
          id={ `attr${index}-input` }
          onChange={ onInputChange }
          value={ state[`cardAttr${index}`] }
        />
      </label>
    );
  }
}

AttrInput.propTypes = {
  state: PropTypes.objectOf().isRequired,
  index: PropTypes.number.isRequired,
};

export default AttrInput;
