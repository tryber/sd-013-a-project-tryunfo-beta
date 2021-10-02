import React, { Component } from 'react';

export class NameInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="name-input">
        Nome
        <input
          value={ value }
          onChange={ onChange }
          data-testid="name-input"
          type="text"
          name="name-input"
          id="name-input"
        />
      </label>
    );
  }
}

export default NameInput;
