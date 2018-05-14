import React, {Component} from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import store from '../../store';
import * as NotificationActions from "../../actions/notificationActions";

class Notifications extends Component {
    constructor(props) {
      super(props);

      this.state = {
          refreshPeriod: null,
          timer : null
      };
    }

    componentDidMount() {
        this.setState({timer : setInterval(this.tick, store.getState().settings.refreshPeriod * 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    resetTimer(refreshPeriod) {
        if(refreshPeriod !== undefined && this.state.refreshPeriod !== refreshPeriod && this.state.timer !== null){
            this.setState({refreshPeriod : refreshPeriod});
            clearInterval(this.state.timer);
            this.setState({timer : setInterval(this.tick, refreshPeriod * 1000)});
        }
    }

    tick() {
        let stageID = store.getState().actualStage.data.id;
        if (stageID !== undefined && store.getState().settings.notifications) {
            store.dispatch(NotificationActions.getNotifications(stageID, new Date().getTime() - store.getState().settings.refreshPeriod * 1000));
        }
    }

    render() {
        const {notifications} = this.props;
        const {refreshPeriod} = this.props;
        this.resetTimer(refreshPeriod);
        return <div>
            {notifications !== undefined && notifications.map(notification => {
                NotificationManager.info(notification.message);
                console.log(notification.message);
            })}
            <NotificationContainer/>
        </div>;
    }
}

export default Notifications;