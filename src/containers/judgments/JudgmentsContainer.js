import { connect } from 'react-redux';
import Judgments from "../../components/judgments/Judgments";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    judgments : store.judgments
  }
}

const JudgmentsContainer = connect(mapStateToProps)(Judgments);

export default JudgmentsContainer;