import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";

class MountainRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Punkte Ranking</title>
                </Helmet>
                <table>
                    <tr>
                        <th className="TableHeaders">Rang</th>
                        <th className="TableHeaders">StartNr</th>
                        <th className="TableHeaders">Punkte</th>
                        <th className="TableHeaders">Name</th>
                        <th className="TableHeaders">Team</th>
                        <th className="TableHeaders">Land</th>
                    </tr>
                    <tbody>
                    {cons.sort((a, b) => a.mountainBonusPoints > b.mountainBonusPoints).map((cons, i) => {
                        return (
                            <Fragment key ={i}>
                                <tr>
                                    <td className="TableRows">{i+1}</td>
                                    <td className="TableRows">{cons.rider.startNr}</td>
                                    <td className="TableRows">{cons.mountainBonusPoints}</td>
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

export default connect(mapStateToProps)(MountainRanking);
