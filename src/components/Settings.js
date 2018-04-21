import React, {Component} from "react";
import {Header, Button, Divider, Form} from "semantic-ui-react";
import {Helmet} from "react-helmet";

class Settings extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Einstellungen</title>
                </Helmet>
                <Header as="h1" color='red'>Einstellungen</Header>
                <Header as="h3">Benachrichtigungen</Header>
                <Button className="App-Button" color="green" fluid>Ein</Button><br/>
                <Button className="App-Button" color="red" fluid >Aus</Button>
                <Divider />
                <Header as="h3">Etappe auswählen</Header>
                <Divider />
                <Header as="h3">Aktualisierungsintervall</Header>
                <Form>
                  <Form.Field control="input" label="Aktualisierungsparameter in Sekunden einstellen"></Form.Field>
                  <Button primary fluid >Aktualisierungsintervall setzen</Button>
                </Form>
                <Divider />
                <Header as="h3">Copyright</Header>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        );
    }
}

export default Settings;