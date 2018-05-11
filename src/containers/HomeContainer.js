import { connect } from 'react-redux';
import Home from "../components/Home";

function mapStateToProps(store) {
  return {
    actualStage : store.actualStage.data
  }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer;