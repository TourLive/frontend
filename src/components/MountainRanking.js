import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

class MountainRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Table">
                <Helmet>
                    <title>Punkte Ranking</title>
                </Helmet>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Rang</Table.HeaderCell>
                    <Table.HeaderCell>StartNr</Table.HeaderCell>
                    <Table.HeaderCell>Punkte</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Land</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {cons.sort((a, b) => a.mountainBonusPoints - b.mountainBonusPoints).map((connection, i) => {
                    return (
                      <Table.Row key={connection.id}>
                        <Table.Cell>{i+1}</Table.Cell>
                        <Table.Cell>{connection.rider.startNr}</Table.Cell>
                        <Table.Cell>{connection.mountainBonusPoints}</Table.Cell>
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

export default connect(mapStateToProps)(MountainRanking);
