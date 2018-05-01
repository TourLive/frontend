import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";
import * as dateUtil from "../util/date.js";

class OfficialRanking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortOrder : 'ascending',
            uiOrder : undefined,
            data : [],
            ranking : []
        };
    }

    handleSort(type) {
        const {cons} = this.props;
        switch(type){
            case 'rang':
                if(this.state.sortOrder === 'ascending'){
                    this.setState({data : cons.sort((a, b) => a.officialGap - b.officialGap), sortOrder: 'descending', uiOrder :'ascending'});
                } else {
                    this.setState({data : cons.sort((a, b) => b.officialGap - a.officialGap), sortOrder: 'ascending', uiOrder:'descending'});
                }
                break;
            case 'startNr':
                if(this.state.sortOrder === 'ascending'){
                    this.setState({data : cons.sort((a, b) => a.rider.startNr - b.rider.startNr), sortOrder: 'descending', uiOrder :'ascending'});
                } else {
                    this.setState({data : cons.sort((a, b) => b.rider.startNr - a.rider.startNr), sortOrder: 'ascending', uiOrder:'descending'});
                }
                break;
            case 'name':
                if(this.state.sortOrder === 'ascending'){
                    this.setState({data : cons.sort((a, b) => a.rider.name.replace(/ /g,'').toLowerCase().localeCompare(b.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'descending', uiOrder :'ascending'});
                } else {
                    this.setState({data : cons.sort((a, b) => b.rider.name.replace(/ /g,'').toLowerCase().localeCompare(a.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'ascending', uiOrder:'descending'});
                }
                break;
            default:
                break;
        }
    };

    componentWillReceiveProps(nextProps){
        const {cons} = nextProps;
        this.setState({data : cons.sort((a, b) => a.officialGap - b.officialGap), sortOrder: 'ascending'});
        var hashtable = {};
        cons.sort((a,b) => a.officialGap - b.officialGap).map(con => hashtable[con.id] = cons.findIndex(c => c.id === con.id)+1);
        this.setState({ranking: hashtable});
    }

    render() {
        const {cons} = this.props;

        return(
            <div className="App-Table">
                <Helmet>
                    <title>OfficialRanking</title>
                </Helmet>
                <Table celled color="red" sortable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell sorted={this.state.uiOrder} onClick={() => this.handleSort('rang')}>Rang</Table.HeaderCell>
                      <Table.HeaderCell sorted={this.state.uiOrder} onClick={() => this.handleSort('startNr')}>StartNr</Table.HeaderCell>
                      <Table.HeaderCell>Zeit</Table.HeaderCell>
                      <Table.HeaderCell sorted={this.state.uiOrder} onClick={() => this.handleSort('name')}>Name</Table.HeaderCell>
                      <Table.HeaderCell>Team</Table.HeaderCell>
                      <Table.HeaderCell>Land</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.data && this.state.data.map((connection, i) => {
                      return (
                        <Table.Row key={connection.id}>
                          <Table.Cell>{this.state.ranking[connection.id]}</Table.Cell>
                          <Table.Cell>{connection.rider.startNr}</Table.Cell>
                          <Table.Cell>{dateUtil.mapValueToTimeString(connection.officialTime)}</Table.Cell>
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


export default connect(mapStateToProps)(OfficialRanking);