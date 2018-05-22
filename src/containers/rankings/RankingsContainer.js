import { connect } from 'react-redux';
import Rankings from "../../components/rankings/Rankings";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data
  }
}

const RankingsContainer = connect(mapStateToProps)(Rankings)

export default RankingsContainer;