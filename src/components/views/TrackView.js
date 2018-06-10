import React, {Component} from "react";
import {Helmet} from "react-helmet";
import SearchResult from "../search/SearchResult";
import TimeLineEndBlock from "../common/TimeLineEndBlock";
import RiderSearchContainer from '../../containers/search/RiderSearchContainer'
import TrackTimeline from "../common/TrackTimeline";
import RaceGroup from "../racegroups/RaceGroup";
import RaceGroupContainer from "../../containers/racegroups/RaceGroupContainer";

class TrackView extends Component {
    render() {
      const {search} = this.props;
      const {timeline} = this.props;
      const {singleRaceGroup} = this.props;
        console.log(timeline);
      return(
            <div className="Fix-Header">
                {search.displayResult === false && singleRaceGroup.display === false &&
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
                {singleRaceGroup.display === true &&
                <div>
                    <Helmet>
                        <title>Renngruppe</title>
                    </Helmet>
                    <RaceGroupContainer/>
                </div>
                }

            </div>
        );
    }
}

export default TrackView;