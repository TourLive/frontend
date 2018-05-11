import React, {Component} from "react";
import {Helmet} from "react-helmet";
import { Table, Flag, Responsive, Icon } from 'semantic-ui-react'
import countries from "./countries";

class MountainRanking extends Component {
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
            case 'points':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.mountainBonusPoints - b.rider.mountainBonusPoints), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.mountainBonusPoints - a.rider.mountainBonusPoints), sortOrder: 'ascending', uiOrder:'descending'});
                break;
            case 'startNr':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.startNr - b.rider.startNr), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.startNr - a.rider.startNr), sortOrder: 'ascending', uiOrder:'descending'});
                break;
            case 'name':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.name.replace(/ /g,'').toLowerCase().localeCompare(b.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.name.replace(/ /g,'').toLowerCase().localeCompare(a.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'ascending', uiOrder:'descending'});
                break;
            case 'team':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.teamShortName.localeCompare(b.rider.teamShortName)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.teamShortName.localeCompare(a.rider.teamShortName)), sortOrder: 'ascending', uiOrder:'descending'});
                break;
            case 'country':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.country.localeCompare(b.rider.country)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.country.localeCompare(a.rider.country)), sortOrder: 'ascending', uiOrder:'descending'});
                break;
            default: // Default sorted by rank
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.virtualGap - b.virtualGap), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.virtualGap - a.virtualGap), sortOrder: 'ascending', uiOrder:'descending'});
                break;
        }
    };

    componentWillReceiveProps(nextProps){
        const {cons} = nextProps;
        this.setState({data : cons.sort((a, b) => a.virtualGap - b.virtualGap), sortOrder: 'ascending'});
        var hashtable = {};
        cons.sort((a,b) => a.virtualGap - b.virtualGap).map(con => hashtable[con.id] = cons.findIndex(c => c.id === con.id)+1);
        this.setState({ranking: hashtable});
    }

    componentDidMount(){
        const {cons} = this.props;
        this.setState({data : cons.sort((a, b) => a.virtualGap - b.virtualGap), sortOrder: 'ascending'});
        var hashtable = {};
        cons.sort((a,b) => a.virtualGap - b.virtualGap).map(con => hashtable[con.id] = cons.findIndex(c => c.id === con.id)+1);
        this.setState({ranking: hashtable});
    }


    dataNotReady(){
        return (
            <Table.Row>
                <Table.Cell>Klassemente werden geladen</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        const sortIcon = this.state.uiOrder === undefined ?
        (
          <Icon name="sort"/>
        ) : (
          <span></span>
        );
        return(
            <div className="App-Table">
                <Helmet>
                    <title>Punkte Ranking</title>
                </Helmet>
              <Table className="App-Table-Grid" basic='very' color="red" celled collapsing sortable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort()}>{sortIcon} Rang</Table.HeaderCell>
                    <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort('startNr')}>{sortIcon} StartNr</Table.HeaderCell>
                    <Table.HeaderCell className="widthThird" sorted={this.state.uiOrder} onClick={() => this.handleSort('points')}>{sortIcon} Punkte</Table.HeaderCell>
                    <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort('name')}>{sortIcon} Name</Table.HeaderCell>
                    <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort('team')}>{sortIcon} Team</Table.HeaderCell>
                    <Table.HeaderCell className="widthThird" sorted={this.state.uiOrder} onClick={() => this.handleSort('country')}>{sortIcon} Land</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.data.length === 0 && this.dataNotReady()}
                    {this.state.data && this.state.data.map((connection, i) => {
                      let flag = countries.find((v) => {
                        return v.ioc === connection.rider.country;
                      });
                      const keyOne = `1${connection.id}`;
                      const keyTwo = `2${connection.id}`;
                      return [
                        <Responsive as={Table.Row} key={keyOne} {...Responsive.onlyMobile}>
                          <Table.Cell>Rang: {this.state.ranking[connection.id]}</Table.Cell>
                          <Table.Cell>Punkte: {connection.mountainBonusPoints}</Table.Cell>
                          <Table.Cell width="4">{connection.rider.startNr} <Flag name={flag.iso.toLowerCase()}/>  {connection.rider.name}, Team: {connection.rider.teamShortName}</Table.Cell>
                        </Responsive>,
                        <Responsive as={Table.Row} key={keyTwo} {...Responsive.onlyComputer}>
                          <Table.Cell>{this.state.ranking[connection.id]}</Table.Cell>
                          <Table.Cell>{connection.rider.startNr}</Table.Cell>
                          <Table.Cell>{connection.mountainBonusPoints}</Table.Cell>
                          <Table.Cell>{connection.rider.name}</Table.Cell>
                          <Table.Cell>{connection.rider.teamShortName}</Table.Cell>
                          <Table.Cell><Flag name={flag.iso.toLowerCase()}/></Table.Cell>
                        </Responsive>
                      ];
                  })}
                </Table.Body>
              </Table>
            </div>
        );
    }
}

export default MountainRanking;
