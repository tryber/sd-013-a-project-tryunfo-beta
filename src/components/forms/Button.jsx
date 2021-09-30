import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <button
        type="button"
        onClick={ onSaveButtonClick }
        data-testid="save-button"
        className="btn btn-outline-dark"
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
