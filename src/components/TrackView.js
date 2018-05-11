import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import {connect} from "react-redux";
import RiderSearch from "./RiderSearch";
import SearchResult from "./SearchResult";
import TimeLineEndBlock from "./TimeLineEndBlock";

class TrackView extends Component {
    render() {
      const {judgments} = this.props;
        const {search} = this.props;
      const {raceGroups} = this.props;

        const divStyle = {
            margin: '0 0 3rem 0'
        };

        const iconStyle = {
            backgroundColor: '#6fba1c'
        };

      return(
            <div className="App-Content">
                {search.displayResult === false &&
                    <div>
                        <Helmet>
                            <title>Streckenansicht</title>
                        </Helmet>
                        <TimeLineEndBlock content="ZIEL"/>
                        <Timeline className="App-Timeline">
                            {judgments.sort((a,b) => b.distance - a.distance).map(element => {
                                const marker = "KM: " + element.distance + " | " + element.name;
                                return (
                                    <TimelineEvent title='' key={element.id} style={divStyle} bubbleStyle={iconStyle} createdAt={marker} />
                                )
                            })}
                        </Timeline>
                        <TimeLineEndBlock content="START"/>
                        <RiderSearch/>
                    </div>
                }
                {search.displayResult === true &&
                    <div>
                        <Helmet>
                            <title>Suchresulat</title>
                        </Helmet>
                        <SearchResult selectedRider={search.selectedRider}/>
                    </div>

                }

            </div>
        );
    }
}

export default TrackView;