import { connect } from 'react-redux';
import OfficialRanking from "../../components/rankings/OfficialRanking";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    cons : store.cons.cons
  }
}
const OfficialRankingContainer = connect(mapStateToProps)(OfficialRanking)

export default OfficialRankingContainer;