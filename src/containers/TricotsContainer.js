import { connect } from 'react-redux';
import Tricots from "../components/tricots/Tricots";


function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data
  }
}

const TricotsContainer = connect(mapStateToProps)(Tricots)

export default TricotsContainer;
