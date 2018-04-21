import React, {Component} from "react";
import {Header, List, Image} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import SingleTrikot from "./SingleTrikot";
import * as maillotActions from '../actions/maillotActions'
import * as riderActions from '../actions/riderActions'
import store from '../store'
import {connect} from "react-redux";

class Trikots extends Component {

  fetchCurrentMaillots() {
    store.dispatch(maillotActions.getCurrentMaillots());
  }

  componentDidMount() {
    this.fetchCurrentMaillots();
  }

  render() {
        const {maillots} = this.props;
        console.log(store.getState().riders);
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Trikots</title>
                </Helmet>
                <Header as="h1" color='red'>Trikots</Header>
                <h1>Offizielle Triktors</h1>
              <List divided verticalAlign='middle' size="massive">
                {maillots.map(x => <SingleTrikot data={x}/>)}
              </List>
            </div>
        );
    }
}

function mapStateToProps(store) {
  return {
    maillots: store.maillots.data
  }
}

export default connect(mapStateToProps)(Trikots);