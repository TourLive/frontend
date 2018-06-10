import React, { Component } from 'react'
import {Card} from "semantic-ui-react";

class RaceGroup extends Component {
    render() {
        const racegroup = this.props.group;

        if (racegroup !== undefined) {
            return (
                <Card>
                    <Card.Content>
                        <Card.Header></Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description></Card.Description>
                        <Card.Description></Card.Description>
                        <Card.Description></Card.Description>
                    </Card.Content>
                </Card>
            )
        }



    }
}

export default RaceGroup;