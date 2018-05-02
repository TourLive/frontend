import React, {Component} from "react";
import {Search} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import {connect} from "react-redux";
import RiderSearch from "./RiderSearch";

class TrackView extends Component {
    render() {
      const {judgments} = this.props;
      const {raceGroups} = this.props;

        const divStyle = {
            margin: '0 0 3rem 0'
        };

        const iconStyle = {
            backgroundColor: '#6fba1c'
        };

      return(
            <div className="App-Content">
                <Helmet>
                    <title>TrackView</title>
                </Helmet>
                <Timeline className="App-Timeline">
                    {judgments.sort((a,b) => b.distance - a.distance).map(element => {
                        const marker = "KM: " + element.distance + " | " + element.name;
                        return (
                            <TimelineEvent title='' key={element.id} style={divStyle} bubbleStyle={iconStyle} createdAt={marker} />
                        )
                    })}
                </Timeline>
                <div className="Search">
                    <RiderSearch/>
                </div>
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