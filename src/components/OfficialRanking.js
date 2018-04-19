import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class OfficialRanking extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>OfficialRanking</title>
                </Helmet>
                <table>
                    <tr>
                        <th>Rang</th>
                        <th>Zeit</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Land</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default OfficialRanking;