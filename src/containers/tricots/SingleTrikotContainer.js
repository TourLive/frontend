import { connect } from 'react-redux';
import SingleTrikot from "../../components/tricots/SingleTrikot";

function mapStateToProps(store) {
  return {
    riders : store.riders.riders,
    cons: store.cons.cons
  }
}

const SingleTrikotContainer = connect(mapStateToProps)(SingleTrikot)

export default SingleTrikotContainer;