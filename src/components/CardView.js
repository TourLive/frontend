import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

const mapCenter = [47.22534, 8.83494];
const zoomLevel = 13;

class Card extends Component {
    render() {
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Card</title>
                </Helmet>
                <Header as="h1" color='red'>Card</Header>
                <Map zoom={zoomLevel} center={mapCenter} className="map">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                </Map>
            </div>
        );
    }
}

export default Card;