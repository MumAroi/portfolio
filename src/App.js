import React, { Component } from 'react';
// import $ from 'jquery';
// import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation';
import Container from './Container';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Container />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
