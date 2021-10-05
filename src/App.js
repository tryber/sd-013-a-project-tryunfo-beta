import React from 'react';
import CardEditor from './components/CardEditor';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="card-editor-title">Tryunfo</h1>
        <CardEditor />
      </div>
    );
  }
}

export default App;
