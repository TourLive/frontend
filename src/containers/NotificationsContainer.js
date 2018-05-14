import { connect } from 'react-redux';
import Notifications from "../components/notifications/Notifications";

function mapStateToProps(store) {
    return {
        notifications : store.notifications.data,
        refreshPeriod : store.settings.refreshPeriod
    }
}

const NotificationsContainer = connect(mapStateToProps)(Notifications)

export default NotificationsContainer;