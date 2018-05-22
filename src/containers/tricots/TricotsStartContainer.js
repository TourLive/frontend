import { connect } from 'react-redux';
import TricotsStart from "../../components/tricots/TricotsStart";

function mapStateToProps(store) {
  return {
    maillots: store.maillots.data
  }
}

const TricotsStartContainer = connect(mapStateToProps)(TricotsStart)

export default TricotsStartContainer;