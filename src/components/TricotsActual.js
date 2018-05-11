import React, {Component} from "react";
import {Helmet} from "react-helmet";
import * as maillotActions from "../actions/maillotActions";
import store from "../store";
import SingleTrikotActualContainer from "../containers/SingleTrikotActualContainer";
import {List} from "semantic-ui-react";
import * as riderStageConnectionsActions from "../actions/riderStageConnectionsActions";


class TricotsActual extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false
        }
    }

    fetchCurrentMaillots(id) {
        store.dispatch(maillotActions.getCurrentMaillots(id));
        store.dispatch(riderStageConnectionsActions.getRiderStageConnectionsFromAPI(id));
        this.setState({updated: true});
    }


    render() {
        const {maillots} = this.props;
        const {actualStage} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
            this.fetchCurrentMaillots(actualStage.id);
        }


        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger Aktuell</title>
                </Helmet>
                <List divided verticalAlign='middle' size="massive">
                    {maillots.map(x => <SingleTrikotActualContainer key={x.id} data={x}/>)}
                </List>
            </div>
        );
    }
}

export default TricotsActual;
