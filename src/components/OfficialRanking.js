import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";

class OfficialRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>OfficialRanking</title>
                </Helmet>
                <table>
                    <tr>
                        <th className="TableHeaders">Rang</th>
                        <th className="TableHeaders">StartNr</th>
                        <th className="TableHeaders">Zeit</th>
                        <th className="TableHeaders">Name</th>
                        <th className="TableHeaders">Team</th>
                        <th className="TableHeaders">Land</th>
                    </tr>
                    <tbody>
                    {cons.sort((a, b) => a.officialGap > b.officialGap).map((cons, i) => {
                        return (
                            <Fragment key ={i}>
                                <tr>
                                    <td className="TableRows">{i+1}</td>
                                    <td className="TableRows">{cons.rider.startNr}</td>
                                    <td className="TableRows">{mapValueToTimeString(cons.officialTime)}</td>
                                    <td className="TableRows">{cons.rider.name}</td>
                                    <td className="TableRows">{cons.rider.teamShortName}</td>
                                    <td className="TableRows">{cons.rider.country}</td>
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
        cons : store.cons.cons
    }
}

function mapValueToTimeString(value){
    var date = new Date(null);
    date.setSeconds(value); // specify value for SECONDS here
    var days = (value/(3600*24)).toFixed(0);
    if(days > 0){
        return days + ":" + date.toISOString().substr(11, 8);
    } else{
        return date.toISOString().substr(11, 8);
    }
}

export default connect(mapStateToProps)(OfficialRanking);
