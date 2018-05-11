import { connect } from 'react-redux';
import MapView from "../components/MapView";

function mapStateToProps(store) {
  return {
    gpsData : store.gpsData.data
  }
}

const MapViewContainer = connect(mapStateToProps)(MapView)

export default MapViewContainer;