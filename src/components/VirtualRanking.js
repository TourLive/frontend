import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import {Table} from "semantic-ui-react";
import {connect} from "react-redux";

class VirtualRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Virtuelles Ranking</title>
                </Helmet>
                  <Table celled>
                    <Table.Header>
                      <Table.HeaderCell>Rang</Table.HeaderCell>
                      <Table.HeaderCell>StartNr</Table.HeaderCell>
                      <Table.HeaderCell>Zeit</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Team</Table.HeaderCell>
                      <Table.HeaderCell>Land</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                      {cons.sort((a, b) => a.virtualGap > b.virtualGap).map((cons, i) => {
                        return (
                          <Table.Row>
                            <Table.Cell>{i+1}</Table.Cell>
                            <Table.Cell>{cons.rider.startNr}</Table.Cell>
                            <Table.Cell>{mapValueToTimeString(cons.virtualGap)}</Table.Cell>
                            <Table.Cell>{cons.rider.name}</Table.Cell>
                            <Table.Cell>{cons.rider.teamShortName}</Table.Cell>
                            <Table.Cell>{cons.rider.country}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
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

export default connect(mapStateToProps)(VirtualRanking);
