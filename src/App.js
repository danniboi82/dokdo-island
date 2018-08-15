import React, {Component} from 'react';
import Dokdo_Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './Views/Home/Home';
import Image_Gallery from './Views/Image_Gallery/Image_Gallery';
import History from './Containers/History';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Dokdo_Navbar/>
          <Switch>
            <Route exact path='/' render={Home}/>
            <Route path='/Image-Gallery' component={Image_Gallery}/>
            <Route path='/History' component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
