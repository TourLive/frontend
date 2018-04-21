import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

class MountainRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Punkte Ranking</title>
                </Helmet>
              <Table celled>
                <Table.Header>
                  <Table.HeaderCell>Rang</Table.HeaderCell>
                  <Table.HeaderCell>StartNr</Table.HeaderCell>
                  <Table.HeaderCell>Punkte</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Team</Table.HeaderCell>
                  <Table.HeaderCell>Land</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  {cons.sort((a, b) => a.mountainBonusPoints > b.mountainBonusPoints).map((cons, i) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{i+1}</Table.Cell>
                        <Table.Cell>{cons.rider.startNr}</Table.Cell>
                        <Table.Cell>{cons.mountainBonusPoints}</Table.Cell>
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

export default connect(mapStateToProps)(MountainRanking);
