import React, { Component } from 'react';
//import logo from '../logo.svg';
import './app.css';

// import nav
import Navigation from '../../components/nanigation';
// import content
import Content from '../content';
// import footer
import Footer from '../footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
