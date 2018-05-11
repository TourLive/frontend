import { connect } from 'react-redux';
import MountainRanking from "../components/MountainRanking";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    cons : store.cons.cons
  }
}
const MountainRankingContainer = connect(mapStateToProps)(MountainRanking)

export default MountainRankingContainer;