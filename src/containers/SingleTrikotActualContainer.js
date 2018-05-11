import { connect } from 'react-redux';
import SingleTrikotActual from "../components/SingleTrikotActual";

function mapStateToProps(store) {
  return {
    cons : store.cons.cons
  }
}

const SingleTrikotActualContainer = connect(mapStateToProps)(SingleTrikotActual)

export default SingleTrikotActualContainer;