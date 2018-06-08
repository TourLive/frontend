import React, {Component} from "react";
import {Header, Button, Divider, Form} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import * as settingsActions from '../../actions/settingsActions'
import store from '../../store';

class Settings extends Component {
    constructor(props) {
      super(props);

      this.state = {
        toSmallRefreshPeriod: false
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

    handleChange = (e, { value } ) => {
        if (value < 10) {
            this.setState({toSmallRefreshPeriod: true});
        } else {
            this.setState({toSmallRefreshPeriod: false});
        }
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
                {/*<Divider />
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
                    </Form>*/}
                    <Divider />
                    <Header as="h3">Aktualisierungsintervall</Header>
                    <p><b>Aktuell:</b> {settings.refreshPeriod} Sekunden</p>
                    <Form onSubmit={this.setPeriodTime}>
                      <Form.Input onChange={this.handleChange} name="intervall" label="Aktualisierungsparameter in Sekunden einstellen (Wert muss grösser/gleich als 10 sein)" defaultValue={settings.refreshPeriod} min="10"></Form.Input>
                      <Button disabled={this.state.toSmallRefreshPeriod} primary fluid type="submit">Aktualisierungsintervall setzen</Button>
                    </Form>
                    <Divider />
                    <Header as="h3">Impressum</Header>
                  <p>Das TourLive System wird seit 2003 an Radrennen eingesetzt. Es umfasst GPS-Aufnahmesysteme, welche im Renntross mitgeführt werden, Datenerfassungs- und Web-Anwendungen bei cnlab AG und die RadioTour Anwendung. Die RadioTour Anwendung dient dem RadioTour Speaker zur Erfassung der Zusammensetzungen und Zeitabstände der Ausreissergruppen. Die vom TourLive System gesammelten Daten nutzen die Rennorganisation,  die Verkehrssicherheitsdienste, Mannschaftsleiter und Zuschauer am Strassenrand oder irgendwo in der Welt am Internet.
                      <br/><br/>
                      Grundlagen zum TourLive System wurden im Rahmen verschiedener Studien- und Bachelorarbeit an der HSR Hochschule für Technik Rapperswil erarbeitet:
                      <br/>
                      <ul>
                        <li>Nov 2001, Philipp Brunner und Sandro    Danioth, Diplomarbeit Abt. Elektrotechnik, TourLive - Kopplung und Steuerung von Velo-Trainingssystemen via Internet</li>
                        <li>Nov 2003, Daniel Kamm, Diplomarbeit Abt. Informatik,  Rennsimulator mit Tacx</li>
                        <li>Nov 2005, Livio Schirru und Christian Schellenberg, Studienarbeit Abt. Informatik, TourLive Windmesser</li>
                        <li>Sep 2007, Bruno Krieg und Daniel Wydler, Diplomarbeit Abt. Informatik, TourLive mit Windows Mobile</li>
                        <li>Feb 2009, Michael Wagner, Stephan Hauser, Bachelorarbeit Abt. Informatik,  TourLive EcoHelper App</li>
                        <li>Jan 2011, Daniel Stucki, Florian        Bentele , Studienarbeit Abt. Informatik, Android Applikation RadioTour</li>
                        <li>Feb 2013, Florian Bentele, Patrizia Heer und Simon Stäheli, Bachelorarbeit Abt. Informatik,  TourLive NG</li>
                        <li>Sep 2017,  Urs Forrer, Dominik Good, Studienarbeit Abt. Informatik, Radio Tour Android Anwendung</li>
                        <li>Jun 2018, Urs Forrer und Dominik Good, Bachelorarbeit Abt. Informatik,  TourLive Webanwendung</li>
                      </ul>
                      Bei cnlab wird das TourLive System von Patrick Eichler, Lukas Frey, Raphael Juchli und Peter Heinzmann betreut und weiter entwickelt.</p>
                </div>
            );
        }
    }

export default Settings;