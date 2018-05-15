import React, {Component} from "react";
import {Header, Button, Divider, Form} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as settingsActions from '../../actions/settingsActions'
import store from '../../store';

class Settings extends Component {
    constructor(props) {
      super(props);

      this.state = {
        formPeriod: 0
      };

      this.enableNotifications = this.enableNotifications.bind(this);
      this.disableNotifications = this.disableNotifications.bind(this);
      this.setPeriodTime = this.setPeriodTime.bind(this);
    }

    enableNotifications() {
        store.dispatch(settingsActions.enableNotifications());
    }

    disableNotifications() {
        store.dispatch(settingsActions.disableNotifications());
    }

    setPeriodTime = (event) => {
        let value = event.target.intervall.value;
        store.dispatch(settingsActions.setPeriodBetweenCalls(value))
    };

    render() {
        const {settings} = this.props;

        console.log()
        const stateNotifications = settings.notifications ? (
            "Aktiviert"
        ) : (
            "Nicht aktiviert"
        );

        return(
            <div className="App-Content">
                <Helmet>
                    <title>Einstellungen</title>
                </Helmet>
                <Header as="h1" className="SecondHeader" color='red'>Einstellungen</Header>
                <Header as="h3">Benachrichtigungen</Header>
                <p><b>Aktuell:</b> {stateNotifications}</p>
                <Button className="App-Button" color="green" fluid onClick={this.enableNotifications}>Ein</Button><br/>
                <Button className="App-Button" color="red" fluid onClick={this.disableNotifications}>Aus</Button>
                <Divider />
                <Header as="h3">Etappe auswählen</Header>
                <Form>
                  <Form.Field control="select">
                    <option>Etappe 1</option>
                    <option>Etappe 2</option>
                    <option>Etappe 3</option>
                    <option>Etappe 4</option>
                    <option>Etappe 5</option>
                    <option>Etappe 6</option>
                    <option>Etappe 7</option>
                    <option>Etappe 8</option>
                    <option>Etappe 9</option>
                  </Form.Field>
                  <Button primary fluid >Etappe wechseln</Button>
                </Form>
                <Divider />
                <Header as="h3">Aktualisierungsintervall</Header>
                <p><b>Aktuell:</b> {settings.refreshPeriod} Sekunden</p>
                <Form onSubmit={this.setPeriodTime}>
                  <Form.Input name="intervall" label="Aktualisierungsparameter in Sekunden einstellen" defaultValue={settings.refreshPeriod}></Form.Input>
                  <Button primary fluid type="submit">Aktualisierungsintervall setzen</Button>
                </Form>
                <Divider />
                <Header as="h3">Copyright</Header>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        );
    }
}

export default Settings;