import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import {connect} from "react-redux";
import { Redirect} from "react-router-dom";
import * as riderActions from "../actions/riderActions";
import * as riderStageConnectionActions from "../actions/riderStageConnectionsActions"
import * as judgmentRiderConnectionActions from "../actions/judgmentRiderConnectionActions"
import * as maillotActions from "../actions/maillotActions";
import * as raceGroupsActions from "../actions/raceGroupsActions";
import store from "../store";
import SearchResult from "./SearchResult";

class RiderSearch extends Component {
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => {
        this.setState({ selectedRider: undefined, selectionActive:false, updated:false, isLoading: false, results: [], value: '' });
    };

    handleResultSelect = (e, { result }) => {
        this.setState({value: result.name, selectionActive:true, selectedRider : result});
    };


    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(this.state.value, 'i');

            const isMatch = result => re.test(result.name) || re.test(result.startNr);

            this.setState({
                isLoading: false,
                results: _.filter(this.props.riders, isMatch),
            })
        }, 300)
    };

    fetchCurrentRiders(id) {
        store.dispatch(riderActions.getRidersFromAPI(id));
        store.dispatch(riderStageConnectionActions.getRiderStageConnectionsFromAPI(id));
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(id));
        store.dispatch(maillotActions.getCurrentMaillots(id));
        store.dispatch(raceGroupsActions.getCurrentRaceGroups(id));
        this.setState({updated: true});
    }

    render() {
        const { isLoading, value, results } = this.state;
        const {actualStage} = this.props;
        if (actualStage.id !== undefined && !this.state.updated) {
            this.fetchCurrentRiders(actualStage.id);
        }

        const RiderRenderer = ({_id, startNr, name}) => {
            return (
                <div key={_id}>
                    StartNr: {startNr}, Name: {name}
                </div>
            )
        };

        return (
            <div className="Search">
                {this.state.selectionActive === false &&
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        resultRenderer={RiderRenderer}
                    />
                }
                {this.state.selectionActive === true &&
                    <SearchResult selectedRider={this.state.selectedRider}/>
                }
            </div>

        )
    }
}

function mapStateToProps(store) {
    return {
        riders : store.riders.riders,
        actualStage : store.actualStage.data
    }
}

export default connect(mapStateToProps)(RiderSearch);