import React, { Component } from 'react';

export class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="description-input'">
        Descrição
        <textarea
          data-testid="description-input"
          id="description-input'"
          name="story"
          rows="6"
          cols="31"
        >
          It was a dark and stormy night...
        </textarea>
      </label>
    );
  }
}

export default DescriptionInput;
