import React, {Component} from "react";
import {Helmet} from "react-helmet";
import SingleTrikotActualContainer from "../../containers/tricots/SingleTrikotActualContainer";
import {List} from "semantic-ui-react";


class TricotsActual extends Component {
    render() {
        const {maillots} = this.props;

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikotträger Aktuell</title>
                </Helmet>
                {maillots.length === 0 ? (
                    <div>In diesem Rennen werden keine Trikots vergeben</div>
                ):(
                    <List divided verticalAlign='middle' size="massive">
                        {maillots.map(x => <SingleTrikotActualContainer key={x.id} data={x}/>)}
                    </List>
                )}
            </div>
        );
    }
}

export default TricotsActual;
