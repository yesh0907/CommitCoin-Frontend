import React, { Component } from 'react';
import { Table, Col, Row } from 'antd';
import actions from '../actions.js';


class Activities extends React.Component {
    state = {
        columns: [{
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
        }, {
          title: 'Repository',
          dataIndex: 'repository',
          key: 'repository',
        }, {
          title: 'starred by',
          dataIndex: 'starred',
          key: 'starred'
        }],
        dataSource: []
    }
    componentDidMount() {
      if (!chrome) return; // eslint-disable-line
      chrome.runtime.sendMessage({ action: actions.GET_CHAIN }, data => { // eslint-disable-line
        let bc = data.blockchain;
        console.log(bc);
        console.log(bc.reduce((arr, e) => (
              e.data.action === actions.ADD_STAR ? [{
                author: e.data.repo.split('/')[0],
                repository: e.data.repo.split('/')[1],
                starred: e.data.user
              }, ...arr] : arr
          ), []));
        this.setState({
          dataSource: bc.reduce((arr, e) => (
              e.data.action === actions.ADD_STAR ? [{
                author: e.data.repo.split('/')[0],
                repository: e.data.repo.split('/')[1],
                starred: e.data.user
              }, ...arr] : arr
          ), [])
        });
      });
    }
    render() {
        return (
            <div className="leaderboard">
                <h1>Activities</h1>
                <p id="ldesc">Github Repositories Starred</p>
                <Row gutter={16} justify="center" align="middle">
                    <Col span={2}></Col>
                    <Col span={20} style={{ backgroundColor: 'white' }}>
                        <Table dataSource={this.state.dataSource} columns={this.state.columns} />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
export default Activities;
