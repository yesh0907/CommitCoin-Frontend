import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Leaderboards from "./Components/Leaderboard";
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
      <Router>
        <div>
          <Affix>
              <Menu
                  id="navBar"
                  className = "menu"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  theme = "dark"
              >
              <Menu.Item key="/">< Link to = "/">
                  <Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="mission"><Link to = "/mission">
                  <Icon type="info" />Mission</Link>
              </Menu.Item>
              <Menu.Item key="leaderboard"> <Link to = "/leaderboard">
                  <Icon type="line-chart" />Leaderboard</Link>
              </Menu.Item>
              <Menu.Item key="contribute"> <Link to = "/contribute">
                  <Icon type="plus"/>Contribute</Link>
              </Menu.Item>
              </Menu>
          </Affix>      
                <Route exact path="/" component={Homepage}/>
                <Route path="/mission" component={Mission}/>
                <Route path="/leaderboard" component={Leaderboards}/>
                <Route path="/contribute" component={Contribute}/>
                <Route path="/" component={Footer}/>    
        </div>
      </Router>
    )
  }
}
export default App;
