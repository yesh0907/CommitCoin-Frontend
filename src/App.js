import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Activities from "./Components/Activities";
import Contribute from "./Components/Contribute";
import Mission from "./Components/Mission";
import Footer from "./Components/Footer";
import { Affix, Menu, Icon } from 'antd';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <Router basename="/build/index.html">
        <div>
          <Affix>
              <Menu
                  id="navBar"
                  className = "menu"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  theme = "light"
              >
              <Menu.Item key="/">< Link to = "/">
                  <Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="mission"><Link to = "/mission">
                  <Icon type="info" />Mission</Link>
              </Menu.Item>
              <Menu.Item key="activities"> <Link to = "/activities">
                  <Icon type="line-chart" />Activities</Link>
              </Menu.Item>
              <Menu.Item key="contribute"> <Link to = "/contribute">
                  <Icon type="plus"/>Contribute</Link>
              </Menu.Item>
              </Menu>
          </Affix>      
                <Route exact path="/" component={Homepage}/>
                <Route path="/mission" component={Mission}/>
                <Route path="/activities" component={Activities}/>
                <Route path="/contribute" component={Contribute}/>
                <Route path="/" component={Footer}/>    
        </div>
      </Router>
    )
  }
}
export default App;
