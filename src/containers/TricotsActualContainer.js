import { connect } from 'react-redux';
import TricotsActual from "../components/TricotsActual";


function mapStateToProps(store) {
  return {
    maillots: store.maillots.data,
    actualStage : store.actualStage.data
  }
}


const TricotsActualContainer = connect(mapStateToProps)(TricotsActual)

export default TricotsActualContainer;