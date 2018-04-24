import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Map, TileLayer, Marker, Popup, Polyline} from "react-leaflet";
import {connect} from "react-redux";

const zoomLevel = 13;

class Card extends Component {
    render() {
        const center = [51.505, -0.09]
        const {gpsData} = this.props;
        const start = gpsData[0];
        const end = gpsData[gpsData.length - 1];
        const array = [];
        gpsData.map(element => {
            array.push([element.latitude, element.longitude]);
        });
        console.log(array);
        console.log(start);
        const data = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]];
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Card</title>
                </Helmet>
                <Header as="h1" color='red'>Card</Header>
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