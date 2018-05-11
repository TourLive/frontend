import { connect } from 'react-redux';
import HeightView from "../components/HeightView";

function mapStateToProps(store) {
  return {
    gpsData : store.gpsData.data
  }
}

const HeightViewContainer = connect(mapStateToProps)(HeightView)

export default HeightViewContainer;