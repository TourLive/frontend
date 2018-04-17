import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Rankings extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Klassemente</title>
                </Helmet>
                <Header as="h1" color='red'>Klassemente</Header>
                <body><h1>Klassemente</h1></body>
            </div>
        );
    }
}

export default Rankings;