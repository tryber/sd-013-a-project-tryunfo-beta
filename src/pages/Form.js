import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AttrInput,
  DescriptionInput, ImageInput, NameInput, RareInput, TrunfoInput } from '../components';

class Form extends Component {
  render() {
    const { state } = this.props;
    return (
      <form>
        <fieldset>
          <NameInput state={ { ...state } } />
          <br />
          <DescriptionInput state={ { ...state } } />
          <br />
          <AttrInput index="1" state={ { ...state } } />
          <br />
          <AttrInput index="2" state={ { ...state } } />
          <br />
          <AttrInput index="3" state={ { ...state } } />
          <br />
          <ImageInput state={ { ...state } } />
          <br />
          <RareInput state={ { ...state } } />
          <br />
          <TrunfoInput state={ { ...state } } />
          <br />
          <button type="button" data-testid="save-button">Salvar</button>

        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  state: PropTypes.objectOf().isRequired,
};

export default Form;
