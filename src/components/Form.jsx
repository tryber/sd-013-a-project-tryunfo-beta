import React from 'react';
import PropTypes from 'prop-types';
import Atribut from './forms/Atribut';
import Button from './forms/Button';
import CardImage from './forms/CardImage';
import CardName from './forms/CardName';
import Description from './forms/Description';
import SelectRarity from './forms/SelectRarity';
import SuperTrunfo from './forms/SuperTrunfo';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h3>Adicionar nova carta</h3>
        <CardName
          onInputChange={ onInputChange }
          cardName={ cardName }
        />
        <Description
          onInputChange={ onInputChange }
          cardDescription={ cardDescription }
        />
        <Atribut
          onInputChange={ onInputChange }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
        <CardImage
          onInputChange={ onInputChange }
          cardImage={ cardImage }
        />
        <div className="rarity-trunfo">
          <SelectRarity
            onInputChange={ onInputChange }
            cardRare={ cardRare }
          />
          <div className="trunfo-conteiner">
            {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <SuperTrunfo
                cardTrunfo={ cardTrunfo }
                onInputChange={ onInputChange }
              />)}
          </div>
        </div>
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
