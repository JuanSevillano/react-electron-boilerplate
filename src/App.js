import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Home from './containers/Home/Home'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Home />
      </div>
    </Router>
  );
}

export default App;
