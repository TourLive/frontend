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
                <h1>TrackView</h1>
            </div>
        );
    }
}

export default TrackView;