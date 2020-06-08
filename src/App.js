import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './components/Navigation/Header'

import Home from './containers/Home/Home'
import Turner from './containers/Turner/Turner'

import classes from './App.module.css';



function App() {

  return (
    <Router>
      <main className={classes.App}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/turner" component={Turner} />
      </main >
    </Router >
  );
}

export default App;
