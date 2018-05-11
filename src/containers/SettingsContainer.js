import { connect } from 'react-redux';
import Settings from "../components/Settings";

function mapStateToProps(store) {
  return {
    settings: store.settings
  }
}

const SettingsContainer = connect(mapStateToProps)(Settings)

export default SettingsContainer;