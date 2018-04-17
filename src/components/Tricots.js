import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Trikots extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikots</title>
                </Helmet>
                <Header as="h1" color='red'>Trikots</Header>
                <body><h1>Trikots</h1></body>
            </div>
        );
    }
}

export default Trikots;