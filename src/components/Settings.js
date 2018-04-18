import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Settings extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Einstellungen</title>
                </Helmet>
                <Header as="h1" color='red'>Einstellungen</Header>
                <h1>Einstellungen</h1>
            </div>
        );
    }
}

export default Settings;