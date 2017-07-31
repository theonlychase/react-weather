import React, { Component } from 'react';
import { Switch, Route }  from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Details from './Details.js';
import Forecast from './Forecast.js';
import NoMatch from './NoMatch.js';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="container">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/forecast' component={Forecast} />
              <Route exact path='/details/:city' component={Details} />
              <Route component={NoMatch}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
