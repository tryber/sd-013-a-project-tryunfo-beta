import React, { Component } from 'react';
import Card from './pages/Card';
import FilterCards from './pages/FilterCards';
import Form from './pages/Form';

export class App extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      cardList: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      filterName: '',
      filterRaridade: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value });
  }

  onSaveButtonClick() {

  }

  render() {
    return (
      <div className="container-tryunfo">
        <div className="container-preview">
          <div>
            <Form
              state={ { ...this.state } }
            />
          </div>
          <div>
            <h1>Previa do Card</h1>
            <Card />
          </div>
        </div>
        <div className="container-display-card">
          <div><FilterCards /></div>
          <div>
            <h1>Lista De Card</h1>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
