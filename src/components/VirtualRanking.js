import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {Table} from "semantic-ui-react";
import {connect} from "react-redux";
import * as dateUtil from "../util/date.js";

class VirtualRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Table">
                <Helmet>
                    <title>Virtuelles Ranking</title>
                </Helmet>
                  <Table celled color="red">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Rang</Table.HeaderCell>
                        <Table.HeaderCell>StartNr</Table.HeaderCell>
                        <Table.HeaderCell>Zeit</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Table.HeaderCell>Land</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {cons.sort((a, b) => a.virtualGap - b.virtualGap).map((connection, i) => {
                        return (
                          <Table.Row key={connection.id}>
                            <Table.Cell>{i+1}</Table.Cell>
                            <Table.Cell>{connection.rider.startNr}</Table.Cell>
                            <Table.Cell>{dateUtil.mapValueToTimeString(connection.virtualGap)}</Table.Cell>
                            <Table.Cell>{connection.rider.name}</Table.Cell>
                            <Table.Cell>{connection.rider.teamShortName}</Table.Cell>
                            <Table.Cell>{connection.rider.country}</Table.Cell>
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

export default connect(mapStateToProps)(VirtualRanking);
