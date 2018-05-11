import { connect } from 'react-redux';
import VirtualRanking from "../components/rankings/VirtualRanking";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    cons : store.cons.cons
  }
}

const VirtualRankingContainer = connect(mapStateToProps)(VirtualRanking)

export default VirtualRankingContainer;