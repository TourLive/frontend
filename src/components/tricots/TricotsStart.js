import React, {Component} from "react";
import {Helmet} from "react-helmet";
import * as maillotActions from "../../actions/maillotActions";
import store from "../../store";
import SingleTrikotContainer from "../../containers/SingleTrikotContainer";
import {List} from "semantic-ui-react";

class TricotsStart extends Component {

    constructor(props){
        super(props);

        this.state = {
            updated: false
        }
    }

    fetchCurrentMaillots(id) {
        store.dispatch(maillotActions.getCurrentMaillots(id));
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
                    <title>Trikotträger Start</title>
                </Helmet>
                <List divided verticalAlign='middle' size="massive">
                    {maillots.map(x => <SingleTrikotContainer key={x.id} data={x}/>)}
                </List>
            </div>
        );
    }
}

export default TricotsStart;
