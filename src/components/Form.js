import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AttrInput from './AttrInput';
import DescriptionInput from './DescriptionInput';
import ImageInput from './ImageInput';
import NameInput from './NameInput';
import RareInput from './RareInput';
import TrunfoInput from './TrunfoInput';

class Form extends Component {
  render() {
    const { onSaveButtonClick, isSaveButtonDisabled } = this.props;
    return (
      <form>
        <fieldset>
          <NameInput state={ { ...this.props } } />
          <br />
          <DescriptionInput state={ { ...this.props } } />
          <br />
          <AttrInput index="1" state={ { ...this.props } } />
          <br />
          <AttrInput index="2" state={ { ...this.props } } />
          <br />
          <AttrInput index="3" state={ { ...this.props } } />
          <br />
          <ImageInput state={ { ...this.props } } />
          <br />
          <RareInput state={ { ...this.props } } />
          <br />
          <TrunfoInput state={ { ...this.props } } />
          <br />
          <button
            disabled={ isSaveButtonDisabled }
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>

        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
