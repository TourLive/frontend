import { connect } from 'react-redux';
import RaceGroup from "../../components/racegroups/RaceGroup";

function mapStateToProps(store) {
    return {
        singleRaceGroup : store.currentRaceGroup,
        raceGroups : store.raceGroups.data
    }
}

const RaceGroupContainer = connect(mapStateToProps)(RaceGroup);

export default RaceGroupContainer;