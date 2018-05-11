import { connect } from 'react-redux';
import SingleJudgment from "../components/SingleJudgment";

function mapStateToProps(store) {
  return {
    riders : store.riders.riders,
    judgmentRiderConnections : store.judgmentRiderConnections.data
  }
}

const SingleJudgmentContainer = connect(mapStateToProps)(SingleJudgment)

export default SingleJudgmentContainer;