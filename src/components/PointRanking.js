import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

class PointRanking extends Component {
    render() {
        const {cons} = this.props;
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Punkte Ranking</title>
                </Helmet>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Rang</Table.HeaderCell>
                    <Table.HeaderCell>StartNr</Table.HeaderCell>
                    <Table.HeaderCell>Bonuspunkte</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Land</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {cons.sort((a, b) => a.bonusPoints > b.bonusPoints).map((cons, i) => {
                    return (
                      <Table.Row key={i+1}>
                        <Table.Cell>{i+1}</Table.Cell>
                        <Table.Cell>{cons.rider.startNr}</Table.Cell>
                        <Table.Cell>{cons.bonusPoints}</Table.Cell>
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

export default connect(mapStateToProps)(PointRanking);
