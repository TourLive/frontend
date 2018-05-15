import { connect } from 'react-redux';
import TrackView from "../components/views/TrackView";

function mapStateToProps(store) {
  return {
    judgments : store.judgments.data,
    raceGroups : store.raceGroups.data,
    search : store.searchState
  }
}

const TrackViewContainer = connect(mapStateToProps)(TrackView)

export default TrackViewContainer;