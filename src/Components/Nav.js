import React, { Component } from 'react';
import logo from './Images/logo_transparent.png';
import { Affix, Button } from 'antd';
import { Menu, Icon } from 'antd';
class Nav extends React.Component {
    constructor () {
        super();
        this.state = {
            current: ''
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render() {
      return (
        <Affix>
            <Menu
                id="navBar"
                className = "menu"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
            <Menu.Item key="home">
                <Icon type="home" />Home
            </Menu.Item>
            <Menu.Item key="mission">
                <Icon type="info" />Mission
            </Menu.Item>
            <Menu.Item key="app">
                <Icon type="line-chart" />Leaderboard
            </Menu.Item>
            <Menu.Item key="contribute">
                <Icon type="plus"/>Contribute
            </Menu.Item>
            </Menu>
        </Affix>
      )
    }
  }
export default Nav;