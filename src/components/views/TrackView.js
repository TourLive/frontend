import React, {Component} from "react";
import {Helmet} from "react-helmet";
import SearchResult from "../search/SearchResult";
import TimeLineEndBlock from "../common/TimeLineEndBlock";
import RiderSearchContainer from '../../containers/RiderSearchContainer'
import TrackTimeline from "../common/TrackTimeline";

class TrackView extends Component {
    render() {
      const {judgments} = this.props;
      const {search} = this.props;
      const {raceGroups} = this.props;
      const {stage} = this.props;
      const {timeline} = this.props;

      return(
            <div className="Fix-Header">
                {search.displayResult === false &&
                    <div>
                        <Helmet>
                            <title>Streckenansicht</title>
                        </Helmet>
                        <TimeLineEndBlock content="ZIEL"/>
                        <TrackTimeline elements={timeline}/>
                        <TimeLineEndBlock content="START"/>
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