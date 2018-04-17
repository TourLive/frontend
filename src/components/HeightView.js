import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class HeightView extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>HeightView</title>
                </Helmet>
                <Header as="h1" color='red'>HeightView</Header>
                <body><h1>HeightView</h1></body>
            </div>
        );
    }
}

export default HeightView;