import React, {Component} from "react";
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

        const iconBergHC = Leaflet.icon({
            iconUrl: require('./mapIcons/berg_hc.png'),
            iconSize:     [40, 40]
        });

        const iconBergKat1 = Leaflet.icon({
            iconUrl: require('./mapIcons/berg_kat1.png'),
            iconSize:     [40, 40]
        });

        const iconBergKat2 = Leaflet.icon({
            iconUrl: require('./mapIcons/berg_kat2.png'),
            iconSize:     [40, 40]
        });

        const iconBergKat3 = Leaflet.icon({
            iconUrl: require('./mapIcons/berg_kat3.png'),
            iconSize:     [40, 40]
        });

        const iconSprint = Leaflet.icon({
            iconUrl: require('./mapIcons/sprint.png'),
            iconSize:     [40, 40]
        });

        const SPRINT_REGEX = /sprint/i;
        const SPURT_REGEX = /spurt/i;
        const BERG_REGEX = /berg/i;
        const BERG_HC_REGEX = /berg.*hc/i;
        const BERG_KAT1_REGEX = /berg.*kat.*1/i;
        const BERG_KAT2_REGEX = /berg.*kat.*2/i;
        const BERG_KAT3_REGEX = /berg.*kat.*3/i;
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
            let points;
            for(var i = 0.05; i <= 0.5; i += 0.05){
                 points = gpsData.filter(e => {
                    return (elem.distance - e.distance) < i && (elem.distance - e.distance) >= -i
                 });
                 if(points.length > 0) {break};
            }
            let temp = points[parseInt(points.length / 2,0)];
            return marker.push({latitude: temp.latitude, longitude: temp.longitude, text : elem.text, skip : elem.skip});
        });

        return(
            <div>
                <Helmet>
                    <title>Kartenansicht</title>
                </Helmet>
                <br/>
                <p className="App-Timestamp"><strong>Letzte Aktualisierung:</strong> {new Date().today()} {new Date().timeNow()}</p>
                {start !== undefined && end !== undefined  && <Map zoom={zoomLevel} center={[start.latitude, start.longitude]} className="map">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                  />
                    <Marker key="start" position={[start.latitude, start.longitude]} icon={iconStart}>
                        <Popup>
                            <span><b>Start</b></span>
                        </Popup>
                    </Marker>
                    <Marker key="end" position={[end.latitude, end.longitude]} icon={iconZiel}>
                        <Popup>
                            <span><b>Ziel</b></span>
                        </Popup>
                    </Marker>
                    <Polyline color="blue" positions={array} />
                    {marker.map((elem,i) => {
                        if(elem.skip === false){
                        let icon = null;
                        let sprint = SPRINT_REGEX.exec(elem.text);
                        let spurt = SPURT_REGEX.exec(elem.text);
                        let berg = BERG_REGEX.exec(elem.text);
                        let bergHC = BERG_HC_REGEX.exec(elem.text);
                        let bergKat1 = BERG_KAT1_REGEX.exec(elem.text);
                        let bergKat2 = BERG_KAT2_REGEX.exec(elem.text);
                        let bergKat3 = BERG_KAT3_REGEX.exec(elem.text);
                        let punkteZeit = PUNKTE_ZEIT_REGEX.exec(elem.text);

                        if(sprint !== null && sprint[0] !== null){ icon = iconSprint;}
                        if(spurt !== null && spurt[0] !== null) { icon = iconSprint; }
                        if(berg !== null && berg[0] !== null) { icon = iconBerg; }
                        if(bergHC !== null && bergHC[0] !== null){ icon = iconBergHC;}
                        if(bergKat1 !== null && bergKat1[0] !== null){ icon = iconBergKat1;}
                        if(bergKat2 !== null && bergKat2[0] !== null){ icon = iconBergKat2;}
                        if(bergKat3 !== null && bergKat3[0] !== null){ icon = iconBergKat3;}
                        if(punkteZeit !== null && punkteZeit[0] !== null) {icon = iconZiel;}

                        return icon !== null && icon !== undefined ? (<Marker key={i} position={[elem.latitude, elem.longitude]} icon={icon}>
                            <Tooltip>
                                <span><b>{elem.text.replace(/<br\/>/ig, '')}</b></span>
                            </Tooltip>
                        </Marker>) : (
                            <Marker key={i} position={[elem.latitude, elem.longitude]}>
                                <Tooltip>
                                    <span><b>{elem.text.replace(/<br\/>/ig, '')}</b></span>
                                </Tooltip>
                            </Marker>
                        )}
                    })}
                </Map>}
            </div>
        );
    }
}

export default MapView;