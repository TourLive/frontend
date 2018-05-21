import { connect } from 'react-redux';
import RiderRaceGroup from "../../components/RiderDetail/RiderRaceGroup";

function mapStateToProps(store) {
  console.log(store.logsRaceGroupHistory.data);
  return {
    actualStage : store.actualStage.data,
    logs : store.logsRaceGroupHistory.data
  }
}

const RiderRaceGroupContainer = connect(mapStateToProps)(RiderRaceGroup)

export default RiderRaceGroupContainer;