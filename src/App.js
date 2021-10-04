import React from 'react';
import { Card, Form } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form cardTrunfo onInputChange={ this.handleChange } />
        <Card { ...this.state } />
      </main>
    );
  }
}

export default App;
