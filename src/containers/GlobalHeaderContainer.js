import { connect } from 'react-redux';
import GlobalHeader from "../components/GlobalHeader";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data,
    actualRace : store.actualRace.data
  }
}

const GlobalHeaderContainer = connect(mapStateToProps)(GlobalHeader)

export default GlobalHeaderContainer;