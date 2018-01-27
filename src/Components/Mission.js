import React, { Component } from 'react';

class Mission extends React.Component {
    render() {
        return (
            <div className="mission">
                <div id="missionChild">
                    <h1>What is CommitCoin?</h1>
                    <p>We all know that human collaboration can lead to better results.
                        Yet, few seem incentivized to contribute to the thousands of promising
                        open source projects on GitHub. CommitCoin hopes to solve this issue. By 
                        utilizing blockchain, we aim to create a framework that rewards developers
                        for providing valuable revisions/additions to open source projects.
                    </p>

                    <p>
                        <i>CommitCoin is the first-ever implementation of WebRTC based 
                        decentralised blockchain in a browser.</i> It consists of three parts--the blockchain to keep records, the chrome extension for mining, and 
                        this online dashboard to track important statistics.
                    </p>
                </div>
            </div>
        )
    }
}
export default Mission;