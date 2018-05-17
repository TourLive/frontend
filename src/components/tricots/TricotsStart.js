import React, {Component} from "react";
import {Helmet} from "react-helmet";
import SingleTrikotContainer from "../../containers/SingleTrikotContainer";
import {List} from "semantic-ui-react";

class TricotsStart extends Component {
    render() {
        const {maillots} = this.props;

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
