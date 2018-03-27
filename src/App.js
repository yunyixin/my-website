import React, {Component} from 'react';
import './App.css';
import {Home, Login} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">this is website header</h1>
        </header>
        <Login/>
        <Home/>
      </div>
    );
  }
}

export default App;
