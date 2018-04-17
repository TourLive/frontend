import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class TrackView extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>TrackView</title>
                </Helmet>
                <Header as="h1" color='red'>TrackView</Header>
                <body><h1>TrackView</h1></body>
            </div>
        );
    }
}

export default TrackView;