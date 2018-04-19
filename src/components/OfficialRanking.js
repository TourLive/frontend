import React, {Component, Fragment} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";

class OfficialRanking extends Component {
    render() {
        const {riders} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>OfficialRanking</title>
                </Helmet>
                <table>
                    <tr>
                        <th className="TableHeaders">Rang</th>
                        <th className="TableHeaders">Zeit</th>
                        <th className="TableHeaders">Name</th>
                        <th className="TableHeaders">Team</th>
                        <th className="TableHeaders">Land</th>
                    </tr>
                    <tbody>
                    {riders.map((rider, i) => {
                        return (
                            <Fragment>
                                <tr key={i} >
                                    <td className="TableRows">Rang</td>
                                    <td className="TableRows">Zeit</td>
                                    <td className="TableRows">{rider.name}</td>
                                    <td className="TableRows">{rider.teamShortName}</td>
                                    <td className="TableRows">{rider.country}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        actualStage : store.actualStage.data,
        riders : store.riders.riders
    }
}

export default connect(mapStateToProps)(OfficialRanking);
