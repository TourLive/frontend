import React, {Component} from "react";
import {Header, Button, Divider} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import store from "../../store"
import * as judgmentRiderConnectionActions from '../../actions/judgmentRiderConnectionActions';
import SingleJudgmentContainer from "../../containers/SingleJudgmentContainer";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import TimeLineEndBlock from "../common/TimeLineEndBlock";
import * as riderStageConnectionsActions from '../../actions/riderStageConnectionsActions'

class Judgments extends Component {
    constructor(props){
      super(props);

      this.state = {
        updated: false,
        selected : false,
        judgmentSelected: false,
        judgment : {},
        timer : null
      };

      this.onJudgmentClicked = this.onJudgmentClicked.bind(this);
      this.onJudgmentClose = this.onJudgmentClose.bind(this);
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

    onJudgmentClicked(element) {
        this.setState({judgmentSelected : true});
        this.setState({judgment : element});
    }

    onJudgmentClose() {
        this.setState({judgmentSelected : false});
        this.setState({judgment : {}});
    }

    render() {
        const {actualStage} = this.props;
        const {judgments} = this.props;

        const divStyle = {
            boxShadow: 'none'
        };

        const iconStyle = {
            backgroundColor: '#6fba1c'
        };

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchInitalJudgmentRiderConnections(actualStage.id);
        }

        const halfHeight = this.state.judgmentSelected === true ? (
            "App-Timeline half"
        ) : (
            "App-Timeline full"
        );

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Wertungen</title>
                </Helmet>
                {this.state.judgmentSelected === false &&
                  <div>
                    <Header as="h1" color='red'>Wertungen</Header>
                    <TimeLineEndBlock content="ZIEL"/>
                    <Timeline className={halfHeight}>
                      {judgments.sort((a, b) => b.distance - a.distance).map(judgment => {
                        const marker = "KM: " + judgment.distance + " | " + judgment.name;
                        return (
                          <TimelineEvent key={judgment.id} title='' contentStyle={divStyle} bubbleStyle={iconStyle} createdAt={marker}>
                            <Button value={judgment.id} onClick={()=>this.onJudgmentClicked(judgment)}>Infos zur Wertung</Button>
                          </TimelineEvent>
                        )
                      })}
                    </Timeline>
                    <TimeLineEndBlock content="START"/>
                  </div>
                }
                {this.state.judgmentSelected === true &&
                    <SingleJudgmentContainer data={this.state.judgment} close={this.onJudgmentClose}/>
                }
            </div>
        );
    }
}

export default Judgments;