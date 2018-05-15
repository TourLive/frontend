import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {Timeline, TimelineEvent} from 'react-event-timeline';
import SearchResult from "../search/SearchResult";
import TimeLineEndBlock from "../common/TimeLineEndBlock";
import RiderSearchContainer from '../../containers/RiderSearchContainer'
import TrackTimeline from "../common/TrackTimeline";

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
                        <TrackTimeline elements={judgments}/>
                        <RiderSearchContainer/>
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