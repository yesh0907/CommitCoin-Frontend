import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
const tabList = [{
    key: 'Author',
    tab: 'Author',
  }, {
    key: 'Stars',
    tab: 'Stars',
  }, {
    key: 'Value',
    tab: 'Value',
  }];
  
  const contentList1 = {
    Author: <p>Repository Author</p>,
    Stars: <p>Repository #of Stars</p>,
    Value: <p>Value in Monero</p>,
  };
  const contentList2 = {
    Author: <p>Repository Author</p>,
    Stars: <p>Repository #of Stars</p>,
    Value: <p>Value in Monero</p>,
  };
  const contentList3 = {
    Author: <p>Repository Author</p>,
    Stars: <p>Repository #of Stars</p>,
    Value: <p>Value in Monero</p>,
  };
class Leaderboards extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'article',
      }
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      }
    render() {
        return (
            <div className="leaderboard">
                <h1>Leaderboards</h1>
                <p id="ldesc">Top Repositories on CommitCoin. Keep Developing!</p>
                <div className="cards">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card 
                              style={{ width: '100%', background:"#aaa"}}
                              bodyStyle={{background:"#eee"}}
                              title="Repo Title"
                              extra={<a href="#">More</a>}
                              tabList={tabList}
                              onTabChange={(key) => { this.onTabChange(key, 'key'); }}>{contentList1[this.state.key]}</Card>
                        </Col>
                        <Col span={8}>
                        <Card 
                              style={{ width: '100%' }}
                              bodyStyle={{background:"#eee"}}
                              title="Repo Title"
                              extra={<a href="#">More</a>}
                              tabList={tabList}
                              onTabChange={(key) => { this.onTabChange(key, 'key'); }}>{contentList2[this.state.key]}</Card>
                        </Col>
                        <Col span={8}>
                        <Card 
                              style={{ width: '100%'}}
                              bodyStyle={{background:"#eee"}}
                              title="Repo Title"
                              extra={<a href="#">More</a>}
                              tabList={tabList}
                              onTabChange={(key) => { this.onTabChange(key, 'key'); }}>{contentList3[this.state.key]}</Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Leaderboards;
