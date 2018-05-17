import { connect } from 'react-redux';
import TricotsActual from "../components/tricots/TricotsActual";


function mapStateToProps(store) {
  return {
    maillots: store.maillots.data
  }
}


const TricotsActualContainer = connect(mapStateToProps)(TricotsActual)

export default TricotsActualContainer;