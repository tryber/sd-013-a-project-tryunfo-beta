import React, { Component } from 'react';
import PropTypes from 'prop-types';

const properties = [
  {
    type: 'text',
    id: 'name-input',
    label: 'Nome',
  },
  {
    type: 'textarea',
    id: 'description-input',
    label: 'Descrição',
  },
  {
    type: 'number',
    id: 'attr1-input',
    label: 'Attr01',
  },
  {
    type: 'number',
    id: 'attr2-input',
    label: 'Attr02',
  },
  {
    type: 'number',
    id: 'attr3-input',
    label: 'Attr03',
  },
  {
    type: 'text',
    id: 'image-input',
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
            data-testid={ properties[idx].id }
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
            data-testid={ properties[idx].id }
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
