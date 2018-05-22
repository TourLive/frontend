import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Map, TileLayer, Marker, Popup, Polyline, CircleMarker, Tooltip} from "react-leaflet";

class MapView extends Component {
    render() {
        const zoomLevel = 13;
        const {gpsData} = this.props;
        const {timeline} = this.props;
        let start = gpsData[0];
        let end = gpsData[gpsData.length - 1];
        const array = [];
        const marker = [];
        gpsData.map(element => {
            array.push([element.latitude, element.longitude]);
        });
        timeline.map(elem => {
            let points = gpsData.filter(e => {
                return (elem.distance - e.distance) < 0.5 && (elem.distance - e.distance) >= -0.5
            });
            console.log(points);
            let temp = points[points.length -1];
            marker.push({latitude: temp.latitude, longitude: temp.longitude, text : elem.text});
        });

        end !== undefined && console.log("ziel: " + end.latitude + " " + end.longitude);
        return(
            <div>
                <Helmet>
                    <title>Kartenansicht</title>
                </Helmet>
                <Header as="h1" color='red' className="Fix-Header">Aktuelles Rennen auf der Karte</Header>
                {start !== undefined && end !== undefined  && <Map zoom={zoomLevel} center={[start.latitude, start.longitude]} className="map">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                    <Marker key="start" position={[start.latitude, start.longitude]}>
                        <Popup>
                            <span><b>Start:</b></span>
                        </Popup>
                    </Marker>
                    <Marker key="end" position={[end.latitude, end.longitude]}>
                        <Popup>
                            <span><b>Ziel:</b></span>
                        </Popup>
                    </Marker>
                    <Polyline color="blue" positions={array} />
                    {marker.map((elem,i) => {
                        return (<CircleMarker key={i} center={[elem.latitude, elem.longitude]} color="red" radius={5}>
                            <Tooltip>
                                <span><b>{elem.text}</b></span>
                            </Tooltip>
                        </CircleMarker>)
                    })}

                </Map>}
            </div>
        );
    }
}

export default MapView;