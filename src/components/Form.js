import React from 'react';

export default function Form() {
  return (
    <div>
      <label htmlFor="name-input">
        Name:
        <input id="name-input" data-testid="name-input" type="text" />
      </label>
      <label htmlFor="description-input">
        Description:
        <input id="description-input" data-testid="description-input" type="textarea" />
      </label>
      <label htmlFor="attr1-input">
        Attribute 1:
        <input id="attr1-input" data-testid="attr1-input" type="number" />
      </label>
      <label htmlFor="attr2-input">
        Attribute 2:
        <input id="attr2-input" data-testid="attr2-input" type="number" />
      </label>
      <label htmlFor="attr3-input">
        Attribute 3:
        <input id="attr3-input" data-testid="attr3-input" type="number" />
      </label>
      <label htmlFor="image-input">
        Image:
        <input id="image-input" data-testid="image-input" type="text" />
      </label>
      <label htmlFor="rare-input">
        Rarity:
        <select id="rare-input" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <label htmlFor="trunfo-input">
        Trunfo:
        <input id="trunfo-input" data-testid="trunfo-input" type="checkbox" />
      </label>
      <button data-testid="save-button" type="button">Salvar</button>
    </div>
  );
}
