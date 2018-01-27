import React, { Component } from 'react';
import { Icon } from 'antd';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div id="footerChild">
                    <a href="mailto:gatiganti44914@sas.edu.sg?Subject=Commit%20Coin"
                    ><Icon type="mail"/> Contact Us</a>
                    <p>Developed by Yesh Chandiramani, Alan Chang, Sohit Gatiganti & Sarthak Navjivan</p>
                </div>    
            </div>
        )
    }
}
export default Footer;