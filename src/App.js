import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="page-content">
          <Banner />
          <Feature />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
