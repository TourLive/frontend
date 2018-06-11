import { connect } from 'react-redux';
import SingleJudgment from "../../components/judgments/SingleJudgment";

function mapStateToProps(store) {
  return {
    riders : store.riders.riders,
    judgmentRiderConnections : store.judgmentRiderConnections.data,
    single : store.judgments.single
  }
}

const SingleJudgmentContainer = connect(mapStateToProps)(SingleJudgment);

export default SingleJudgmentContainer;