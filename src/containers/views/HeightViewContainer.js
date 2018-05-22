import { connect } from 'react-redux';
import HeightView from "../../components/views/HeightView";

function mapStateToProps(store) {
  return {
    gpsData : store.gpsData.data,
    timeline : store.timeline.data
  }
}

const HeightViewContainer = connect(mapStateToProps)(HeightView)

export default HeightViewContainer;