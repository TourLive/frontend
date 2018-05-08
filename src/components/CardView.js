import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Map, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import {connect} from "react-redux";

class Card extends Component {
    render() {
        const defaultLatitude = 47.71780751;
        const defaultLongitude = 8.666430535;
        const zoomLevel = 13;
        const {gpsData} = this.props;
        let start = gpsData[0];
        let end = gpsData[gpsData.length - 1];
        const array = [];
        gpsData.map(element => {
            array.push([element.latitude, element.longitude]);
        });
        start === undefined ? (start = [], start.longitude=defaultLongitude, start.latitude=defaultLatitude) : (start = gpsData[0]);
        end === undefined ? (end = [], end.longitude=defaultLongitude, end.latitude=defaultLatitude) : (end = gpsData[gpsData.length -1]);
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Kartenansicht</title>
                </Helmet>
                <Header as="h1" color='red'>Aktuelles Rennen auf der Karte</Header>
                <Map zoom={zoomLevel} center={[start.latitude, start.longitude]} className="map">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                    <Marker position={[start.latitude, start.longitude]}>
                        <Popup>
                            <span><b>Start:</b></span>
                        </Popup>
                    </Marker>
                    <Marker position={[end.latitude, end.longitude]}>
                        <Popup>
                            <span><b>Ziel:</b></span>
                        </Popup>
                    </Marker>
                    <Polyline color="blue" positions={array} />
                </Map>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        gpsData : store.gpsData.data
    }
}

export default connect(mapStateToProps)(Card);