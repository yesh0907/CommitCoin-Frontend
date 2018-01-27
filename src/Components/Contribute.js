import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';
class Contribute extends React.Component {
    constructor() {
        super();
        this.state = {
            size: 'large'
        }
    }
    render() {
        return (
        <div className="contribute">
            <h1> Contribute </h1>
            <Button target="#" type="primary" size='large'> <Icon type="plus"/>Add Your Repository</Button>
        </div>
        )
    }
}
export default Contribute;