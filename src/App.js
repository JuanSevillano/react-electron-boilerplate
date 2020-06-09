import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Navigation/Header'

import Home from './containers/Home/Home'
import Turner from './containers/Turner/Turner'
import Admin from './containers/Admin/Admin'

import classes from './App.module.css';

import reducer from './store/reducers/turns'

const store = createStore(reducer)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <main className={classes.App}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/turner" component={Turner} />
          <Route path="/admin" component={Admin} />
        </main >
      </Router >
    </Provider>

  );
}

export default App;
