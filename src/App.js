import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Activities from "./Components/Activities";
import Contribute from "./Components/Contribute";
import Mission from "./Components/Mission";
import Footer from "./Components/Footer";


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Router>
            <div>      
              <Route path="/" component={Nav}/>
              <Route path="/" component={Homepage}/>
              <Route path="/" component={Mission}/>
              <Route path="/" component={Activities}/>
              <Route path="/" component={Contribute}/>
              <Route path="/" component={Footer}/>
            </div>     
        </Router>
      </div>
    )
  }
}
export default App;
