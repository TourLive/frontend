import React, {Component} from "react";
import {Helmet} from "react-helmet";
import SingleTrikotActualContainer from "../../containers/SingleTrikotActualContainer";
import {List} from "semantic-ui-react";


class TricotsActual extends Component {
    render() {
        const {maillots} = this.props;

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
