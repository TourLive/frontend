import { connect } from 'react-redux';
import PointRanking from "../../components/rankings/PointRanking";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    cons : store.cons.cons
  }
}
const PointRankingContainer = connect(mapStateToProps)(PointRanking)

export default PointRankingContainer;