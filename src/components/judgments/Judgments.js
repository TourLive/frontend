import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import store from "../../store"
import * as judgmentRiderConnectionActions from '../../actions/judgmentRiderConnectionActions';
import SingleJudgmentContainer from "../../containers/judgments/SingleJudgmentContainer";
import TimeLineEndBlock from "../common/TimeLineEndBlock";
import JudgmentTimeline from "./timeline/JudgmentTimeline";

class Judgments extends Component {
    constructor(props){
      super(props);

      this.state = {
        updated: false,
        selected : false,
        timer : null
      };
    }

    componentDidMount() {
      let timer = setInterval(this.tick, store.getState().settings.refreshPeriod * 1000);
      this.setState({timer});
    }

    componentWillUnmount() {
      clearInterval(this.state.timer);
    }

    tick() {
      let stageID = store.getState().actualStage.data.id;
      if (stageID !== undefined) {
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(stageID));
      }
    }

    fetchInitalJudgmentRiderConnections(id) {
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(id));
        this.setState({updated : true});
    }

    render() {
        const {actualStage} = this.props;
        const {judgments} = this.props;

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchInitalJudgmentRiderConnections(actualStage.id);
        }

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Wertungen</title>
                </Helmet>
                {judgments.display === false &&
                  <div>
                    <Header as="h1" color='red'>Wertungen</Header>
                    <TimeLineEndBlock content="ZIEL"/>
                    <JudgmentTimeline elements={judgments.data}/>
                    <TimeLineEndBlock content="START"/>
                  </div>
                }
                {judgments.display === true &&
                    <SingleJudgmentContainer data={this.state.judgment} close={this.onJudgmentClose}/>
                }
            </div>
        );
    }
}

export default Judgments;