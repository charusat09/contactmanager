import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="Mayur" phone="+91 987 654 3210" email="mayur@gmail.com"/>
          <Contact name="Parth" phone="+91 333 222 1111" email="parth@gmail.com"/>
        </div>
      </div>
    );
  }
}

export default App;
