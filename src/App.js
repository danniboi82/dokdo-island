import React, {Component} from 'react';
import Dokdo_Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './Views/Home/Home';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Dokdo_Navbar/>
          <Home/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
