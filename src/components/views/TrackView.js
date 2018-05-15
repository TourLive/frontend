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
      const {stage} = this.props;


      let elements = [];
      judgments.map(judgment => {elements.push({distance : judgment.distance, text : judgment.name})});
      raceGroups.map(raceGroup => {elements.push({distance : 90, text : raceGroup.raceGroupType})});
      elements.sort((a,b) => b.distance - a.distance);
      let elems = [];
      let lastElement = null;
      let size = elements.length;
      let sizeBottom = 0;
      elements.map((elem, i) => {
          let gap = 0;
          if (i === 0) {
              gap = stage.distance - elem.distance;
          } else if(size === i + 1) {
              sizeBottom = elem.distance;
            gap = lastElement.distance - elem.distance;
          } else {
              gap = lastElement.distance - elem.distance;
          }
          lastElement = elem;
          elems.push({distance : elem.distance, text : elem.text, gap: gap});
      });

      return(
            <div className="Fix-Header">
                {search.displayResult === false &&
                    <div>
                        <Helmet>
                            <title>Streckenansicht</title>
                        </Helmet>
                        <TimeLineEndBlock content="ZIEL"/>
                        <TrackTimeline elements={elems} bottom={sizeBottom}/>
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