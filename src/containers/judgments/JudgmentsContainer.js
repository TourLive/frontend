import { connect } from 'react-redux';
import Judgments from "../../components/judgments/Judgments";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    judgments : store.judgments.data
  }
}

const JudgmentsContainer = connect(mapStateToProps)(Judgments)

export default JudgmentsContainer;