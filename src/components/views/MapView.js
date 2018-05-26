import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Map, TileLayer, Marker, Popup, Polyline, Tooltip} from "react-leaflet";
import Leaflet from "leaflet";

class MapView extends Component {
    render() {
        const iconStart = Leaflet.icon({
            iconUrl: require('./mapIcons/start.png'),
            iconSize:     [40, 40]
        });

        const iconZiel = Leaflet.icon({
            iconUrl: require('./mapIcons/ziel.png'),
            iconSize:     [40, 40]
        });

        const iconBerg = Leaflet.icon({
            iconUrl: require('./mapIcons/berg.png'),
            iconSize:     [40, 40]
        });

        const iconSprint = Leaflet.icon({
            iconUrl: require('./mapIcons/sprint.png'),
            iconSize:     [40, 40]
        });

        const SPRINT_REGEX = /sprint/i;
        const BERG_REGEX = /berg/i;
        const PUNKTE_ZEIT_REGEX = /punkte|zeit/i;

        const zoomLevel = 13;
        const {gpsData} = this.props;
        const {timeline} = this.props;
        let start = gpsData[0];
        let end = gpsData[gpsData.length - 1];
        const array = [];
        const marker = [];

        gpsData.map(element => {
            return array.push([element.latitude, element.longitude]);
        });
        timeline.map(elem => {
            let points = gpsData.filter(e => {
                return (elem.distance - e.distance) < 0.5 && (elem.distance - e.distance) >= -0.5
            });
            let temp = points[points.length -1];
            return marker.push({latitude: temp.latitude, longitude: temp.longitude, text : elem.text});
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
                    <Marker key="start" position={[start.latitude, start.longitude]} icon={iconStart}>
                        <Popup>
                            <span><b>Start:</b></span>
                        </Popup>
                    </Marker>
                    <Marker key="end" position={[end.latitude, end.longitude]} icon={iconZiel}>
                        <Popup>
                            <span><b>Ziel:</b></span>
                        </Popup>
                    </Marker>
                    <Polyline color="blue" positions={array} />
                    {marker.map((elem,i) => {
                        var icon = null;
                        console.log("text" + elem.text);
                        var sprint = SPRINT_REGEX.exec(elem.text);
                        var berg = BERG_REGEX.exec(elem.text);
                        var punkteZeit = PUNKTE_ZEIT_REGEX.exec(elem.text);
                        if(sprint !== null && sprint[0] !== null){ icon = iconSprint;}
                        else if(berg !== null && berg[0] !== null){ icon = iconBerg;}
                        else if(punkteZeit !== null && punkteZeit[0] !== null) {icon = iconZiel;}
                        return icon !== null ? (<Marker key={i} position={[elem.latitude, elem.longitude]} icon={icon}>
                            <Tooltip>
                                <span><b>{elem.text}</b></span>
                            </Tooltip>
                        </Marker>) : (
                            <Marker key={i} position={[elem.latitude, elem.longitude]}>
                                <Tooltip>
                                    <span><b>{elem.text}</b></span>
                                </Tooltip>
                            </Marker>
                        )
                    })}
                </Map>}
            </div>
        );
    }
}

export default MapView;