import React, { Component } from 'react';

export class RareInput extends Component {
  render() {
    return (
      <label htmlFor="rare-input">
        <select name="rare-input" id="rare-input" data-testid="rare-input">
          <option value="normal" select>Nomal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

export default RareInput;
