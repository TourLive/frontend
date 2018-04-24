import React, {Component} from "react";
import {Header, Button, Divider} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import store from "../store"
import * as judgmentRiderConnectionActions from '../actions/judgmentRiderConnectionActions';
import SingleJudgment from "./SingleJudgment";
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Judgments extends Component {
    constructor(props){
      super(props);

      this.state = {
        updated: false,
        selected : false,
        judgmentSelected: false,
        judgment : {}
      };

      this.onJudgmentClicked = this.onJudgmentClicked.bind(this);
      this.onJudgmentClose = this.onJudgmentClose.bind(this);
    }

    fetchJudgmentRiderConnections(id) {
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(id));
        this.setState({updated : true});
    }

    onJudgmentClicked(element) {
        console.log("IM HERE");
        console.log(element);
        this.setState({judgmentSelected : true});
        this.setState({judgment : element});
    }

    onJudgmentClose() {

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
          this.fetchJudgmentRiderConnections(actualStage.id);
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
                <Header as="h1" color='red'>Wertungen</Header>
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
                {this.state.judgmentSelected === true &&
                    <div>
                        <Divider />
                        <SingleJudgment data={this.state.judgment}/>
                    </div>
                }
            </div>
        );
    }
}


function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    judgments : store.judgments.data
  }
}

export default connect(mapStateToProps)(Judgments);