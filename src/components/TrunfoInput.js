import React, { Component } from 'react';

export class TrunfoInput extends Component {
  render() {
    return (
      <label htmlFor="trunfo-input">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo-input"
          id="trunfo-input"
        />
        Super Trunfo
      </label>
    );
  }
}

export default TrunfoInput;
