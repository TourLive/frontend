import { connect } from 'react-redux';
import RiderSearch from "../../components/search/RiderSearch";

function mapStateToProps(store) {
  return {
    riders : store.riders.riders,
    actualStage : store.actualStage.data
  }
}

const RiderSearchContainer = connect(mapStateToProps)(RiderSearch)

export default RiderSearchContainer;