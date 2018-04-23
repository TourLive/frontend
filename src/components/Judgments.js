import React, {Component} from "react";
import {Header, Button, Container, Divider} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import store from "../store"
import * as judgmentRiderConnectionActions from '../actions/judgmentRiderConnectionActions';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Judgments extends Component {
    constructor(props){
      super(props);

      this.state = {
        updated: false,
        selected : false,
        judgmentSelected: false
      };

      this.onJudgmentClicked = this.onJudgmentClicked.bind(this);
      this.onJudgmentClose = this.onJudgmentClose.bind(this);
    }

    fetchJudgmentRiderConnections(id) {
        store.dispatch(judgmentRiderConnectionActions.getJudgmentRiderConnections(id));
    }

    onJudgmentClicked(element) {
        console.log("IM HERE");
        console.log(element);
        this.setState({judgmentSelected : true});
    }

    onJudgmentClose() {

    }

    render() {
        const {actualStage} = this.props;
        const {judgments} = this.props;

        const divStyle = {
            'box-shadow': 'none'
        };

        const iconStyle = {
            'background-color': '#6fba1c'
        };

        if (actualStage.id !== undefined && !this.state.updated) {
          this.fetchJudgmentRiderConnections(actualStage.id);
        }

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Wertungen</title>
                </Helmet>
                <Header as="h1" color='red'>Wertungen</Header>
                <Timeline className="App-Timeline">
                    {judgments.sort((a, b) => a.distance < b.distance).map(judgment => {
                        const marker = "KM: " + judgment.distance + " | " + judgment.name;
                        return (
                            <TimelineEvent contentStyle={divStyle} bubbleStyle={iconStyle} createdAt={marker}>
                                <Button onClick={this.onJudgmentClicked}>Infos zur Wertung</Button>
                            </TimelineEvent>
                        )
                    })}
                </Timeline>
                {this.state.judgmentSelected === true &&
                    <div>
                        <Divider />
                        <Container>
                            <h1>ON JUDGMENT CLICKED</h1>
                        </Container>
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