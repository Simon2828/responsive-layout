import React, { Component } from 'react';

import '../App.css';
import Navbar from './Navbar';
import Product from './Product';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
