import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Judgments extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Wertungen</title>
                </Helmet>
                <Header as="h1" color='red'>Wertungen</Header>
                <body><h1>Wertungen</h1></body>
            </div>
        );
    }
}

export default Judgments;