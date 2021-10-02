import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AttrInput extends Component {
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
  index: PropTypes.string.isRequired,
  state: PropTypes.shape().isRequired,
};

export default AttrInput;
