import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Card extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Card</title>
                </Helmet>
                <Header as="h1" color='red'>Card</Header>
                <h1>Card</h1>
            </div>
        );
    }
}

export default Card;