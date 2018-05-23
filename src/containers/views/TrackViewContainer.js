import { connect } from 'react-redux';
import TrackView from "../../components/views/TrackView";

function mapStateToProps(store) {
  return {
    judgments : store.judgments.data,
    search : store.searchState,
    stage : store.actualStage.data,
    timeline : store.timeline.data
  }
}

const TrackViewContainer = connect(mapStateToProps)(TrackView);

export default TrackViewContainer;