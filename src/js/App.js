// import "bootstrap";
import '../assets/styles/app.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/Skills" component={Skills} />
  </div>
);

export default App;
