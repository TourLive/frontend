import { connect } from 'react-redux';
import Rankings from "../components/Rankings";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data
  }
}

const RankingsContainer = connect(mapStateToProps)(Rankings)

export default RankingsContainer;