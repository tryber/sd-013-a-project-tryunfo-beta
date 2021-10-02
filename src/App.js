import React, { Component } from 'react';
import Card from './pages/Card';
import FilterCards from './pages/FilterCards';
import Form from './pages/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      filterName: '',
      filterRaridade: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  render() {
    return (
      <div className="container-tryunfo">
        <div className="container-preview">
          <div><Form state={ this.state } /></div>
          <div><Card /></div>
        </div>
        <div className="container-display-card">
          <div><FilterCards /></div>
          <div><Card /></div>
        </div>
      </div>
    );
  }
}

export default App;
