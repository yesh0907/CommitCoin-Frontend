import React, { Component } from 'react';
import logo from './Images/logo_White.png';
class Homepage extends React.Component {
    render() {
      return (
        <div className="home">
          <h1 className="title"> CommitCoin </h1>
          <div id="description"> <i>Rewarding Open Source Contributors Through the Blockchain</i> </div>
          <img id="homeLogo" src={logo} alt="logo"></img>
        </div>
      )
    }
}
export default Homepage;
