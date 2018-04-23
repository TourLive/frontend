import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import {connect} from "react-redux";

class TrackView extends Component {
    render() {
      const {judgments} = this.props;
      const {raceGroups} = this.props;

        const divStyle = {
            margin: '0 0 3rem 0'
        };

        const iconStyle = {
            'background-color': '#6fba1c'
        };

      return(
            <div className="App-Content">
                <Helmet>
                    <title>TrackView</title>
                </Helmet>
                <Header as="h1" color='red'>TrackView</Header>
                <Timeline className="App-Timeline">
                    {judgments.sort((a,b) => a.distance < b.distance).map(element => {
                        const marker = "KM: " + element.distance + " | " + element.name;
                        return (
                            <TimelineEvent key={element.id} style={divStyle} bubbleStyle={iconStyle} createdAt={marker} />
                        )
                    })}
                </Timeline>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        judgments : store.judgments.data,
        raceGroups : store.raceGroups.data
    }
}

export default connect(mapStateToProps)(TrackView);