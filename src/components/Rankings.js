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
                <h1>Klassemente</h1>
            </div>
        );
    }
}

export default Rankings;