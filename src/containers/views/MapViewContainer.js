import { connect } from 'react-redux';
import MapView from "../../components/views/MapView";

function mapStateToProps(store) {
  return {
    gpsData : store.gpsData.data,
    timeline : store.timeline.data
  }
}

const MapViewContainer = connect(mapStateToProps)(MapView)

export default MapViewContainer;