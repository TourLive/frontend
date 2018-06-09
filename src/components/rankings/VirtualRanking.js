import React, {Component} from "react";
import {Helmet} from "react-helmet";
import { Table, Flag, Responsive, Icon } from 'semantic-ui-react';
import * as dateUtil from "../../util/date.js";
import countries from "../../util/countries";

class VirtualRanking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortOrder : 'ascending',
            uiOrder : undefined,
            activeSort : '',
            data : []
        };
    }

    handleSort(type) {
        const {cons} = this.props;
        switch(type){
            case 'startNr':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.startNr - b.rider.startNr), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.startNr - a.rider.startNr), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'startNr'});
                break;
            case 'name':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.name.replace(/ /g,'').toLowerCase().localeCompare(b.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.name.replace(/ /g,'').toLowerCase().localeCompare(a.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'name'});
                break;
            case 'team':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.teamShortName.localeCompare(b.rider.teamShortName)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.teamShortName.localeCompare(a.rider.teamShortName)), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'team'});
                break;
            case 'country':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rider.country.localeCompare(b.rider.country)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rider.country.localeCompare(a.rider.country)), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'country'});
                break;
            case 'official':
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.officialTime - b.officialTime), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.officialTime - a.officialTime), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'official'});
                break;
            default: // Default sorted by rank
                this.state.sortOrder === 'ascending' ? this.setState({data : cons.sort((a, b) => a.rank - b.rank), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : cons.sort((a, b) => b.rank - a.rank), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: ''});
                break;
        }
    };

    componentWillReceiveProps(nextProps){
        const {cons} = nextProps;
        this.setState({cons : cons});

        let array = [];
        cons.sort((a,b) => a.virtualGap - b.virtualGap).map((con,i) => {
            con.rank = i + 1;
            return array.push(con);
        });
        console.log(this.state.sortOrder);
        console.log(this.state.activeSort);

        switch(this.state.activeSort){
            case 'startNr':
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.rider.startNr - b.rider.startNr), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.rider.startNr - a.rider.startNr), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'startNr'});
                break;
            case 'name':
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.rider.name.replace(/ /g,'').toLowerCase().localeCompare(b.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.rider.name.replace(/ /g,'').toLowerCase().localeCompare(a.rider.name.replace(/ /g,'').toLowerCase())), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'name'});
                break;
            case 'team':
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.rider.teamShortName.localeCompare(b.rider.teamShortName)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.rider.teamShortName.localeCompare(a.rider.teamShortName)), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'team'});
                break;
            case 'country':
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.rider.country.localeCompare(b.rider.country)), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.rider.country.localeCompare(a.rider.country)), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'country'});
                break;
            case 'official':
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.officialTime - b.officialTime), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.officialTime - a.officialTime), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: 'official'});
                break;
            default: // Default sorted by rank
                this.state.sortOrder !== 'ascending' ? this.setState({data : array.sort((a, b) => a.rank - b.rank), sortOrder: 'descending', uiOrder :'ascending'}) :
                    this.setState({data : array.sort((a, b) => b.rank - a.rank), sortOrder: 'ascending', uiOrder:'descending'});
                    this.setState({activeSort: ''});
                break;
        }
    }

    componentDidMount(){
        const {cons} = this.props;
        this.setState({cons : cons});
        let array = [];
        this.handleSort(this.state.activeSort);
        cons.sort((a,b) => a.virtualGap - b.virtualGap).map((con,i) => {
            con.rank = i + 1;
            return array.push(con);
        });
        this.setState({data : array});
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
                    <title>Virtuelles Ranking</title>
                </Helmet>
                <p>Einzelgesamtwertung nach Zeit</p>
                  <Table className="App-Table-Grid" basic='very' color="red" celled collapsing sortable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort()}>{sortIcon} Rang</Table.HeaderCell>
                        <Table.HeaderCell className="widthThird floatLeft" sorted={this.state.uiOrder} onClick={() => this.handleSort('startNr')}>{sortIcon} StartNr</Table.HeaderCell>
                        <Table.HeaderCell className="widthThird" sorted={this.state.uiOrder} onClick={() => this.handleSort()}>{sortIcon} Zeit</Table.HeaderCell>
                        <Table.HeaderCell className="widthThird" sorted={this.state.uiOrder} onClick={() => this.handleSort('official')}>{sortIcon} Zeit beim Start</Table.HeaderCell>
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
                              <Table.Cell>Rang: {connection.rank}</Table.Cell>
                              <Table.Cell>Zeit: {dateUtil.mapValueToTimeString(connection.virtualGap)} Zeit beim Start: {dateUtil.mapValueToTimeString(connection.officialTime)}</Table.Cell>
                              <Table.Cell width="4">{connection.rider.startNr} <Flag name={flag.iso.toLowerCase()}/>  {connection.rider.name}, Team: {connection.rider.teamShortName}</Table.Cell>
                            </Responsive>,
                            <Responsive as={Table.Row} key={keyTwo} {...Responsive.onlyComputer}>
                              <Table.Cell>{connection.rank}</Table.Cell>
                              <Table.Cell>{connection.rider.startNr}</Table.Cell>
                              <Table.Cell>{dateUtil.mapValueToTimeString(connection.virtualGap)}</Table.Cell>
                              <Table.Cell>{dateUtil.mapValueToTimeString(connection.officialTime)}</Table.Cell>
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

export default VirtualRanking;
