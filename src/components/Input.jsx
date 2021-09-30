import React, { Component } from 'react';
import PropTypes from 'prop-types';

const properties = [
  {
    type: 'text',
    id: 'cardName',
    testid: 'name-input',
    label: 'Nome',
  },
  {
    type: 'textarea',
    id: 'cardDescription',
    testid: 'description-input',
    label: 'Descrição',
  },
  {
    type: 'number',
    id: 'cardAttr1',
    testid: 'attr1-input',
    label: 'Attr01',
  },
  {
    type: 'number',
    id: 'cardAttr2',
    testid: 'attr2-input',
    label: 'Attr02',
  },
  {
    type: 'number',
    id: 'cardAttr3',
    testid: 'attr3-input',
    label: 'Attr03',
  },
  {
    type: 'text',
    id: 'cardImage',
    testid: 'image-input',
    label: 'Imagem',
  },
];

class Input extends Component {
  render() {
    const { idx, value, onChange } = this.props;
    return (
      idx === 1 ? (
        <>
          <label htmlFor={ properties[idx].id }>
            { properties[idx].label }
          </label>
          <textarea
            type={ properties[idx].type }
            id={ properties[idx].id }
            data-testid={ properties[idx].testid }
            value={ value }
            onChange={ onChange }
          />
        </>
      ) : (
        <>
          <label htmlFor={ properties[idx].id }>
            { properties[idx].label }
          </label>
          <input
            type={ properties[idx].type }
            id={ properties[idx].id }
            data-testid={ properties[idx].testid }
            value={ value }
            onChange={ onChange }
          />
        </>
      )
    );
  }
}

export default Input;

Input.propTypes = {
  idx: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
