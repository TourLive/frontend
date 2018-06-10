import { connect } from 'react-redux';
import RaceGroup from "../../components/racegroups/RaceGroup";

function mapStateToProps(store) {
    return {
        riders : store.riders.riders,
        singleRaceGroup : store.currentRaceGroup
    }
}

const RaceGroupContainer = connect(mapStateToProps)(RaceGroup)

export default RaceGroupContainer;