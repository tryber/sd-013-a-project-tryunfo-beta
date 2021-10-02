import React, { Component } from 'react';

export class AttrInput extends Component {
  render() {
    const { index } = this.props;
    return (
      <label htmlFor={ `attr${index}-input` }>
        {`Attr0${index}`}
        <input
          data-testid={ `attr${index}-input` }
          type="number"
          name={ `attr${index}-input` }
          id={ `attr${index}-input` }
        />
      </label>
    );
  }
}

export default AttrInput;
