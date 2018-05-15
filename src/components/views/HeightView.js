import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Line} from 'react-chartjs-2';

class HeightView extends Component {

    distance(elementOne, elementTwo) {
        // Source: http://www.guymon.de/wordpress/2010/01/25/entfernung-zwischen-zwei-latlong-werten-berechnen/
        var lat_1 = elementOne.latitude;
        var lat_2 = elementTwo.latitude;
        var lon_1 = elementOne.longitude;
        var lon_2 = elementTwo.longitude;
        var rho = 3960.0;
        var phi_1 = (90.0 - lat_1)*Math.PI/180.0;
        var phi_2 = (90.0 - lat_2)*Math.PI/180.0;
        var theta_1 = lon_1*Math.PI/180.0;
        var theta_2 = lon_2*Math.PI/180.0;
        var d = rho*Math.acos( Math.sin(phi_1)*Math.sin(phi_2)*Math.cos(theta_1 - theta_2) + Math.cos(phi_1)*Math.cos(phi_2) );
        return 1.609344*d;
    }

    render() {
        const {gpsData} = this.props;
        const array = [];
        const labels = [];
        let currentDistance = 0.0;
        let lastElement  = null;
        gpsData.map(element => {
            let distance = 0.0;
            if (lastElement === null) {
                distance = 0.0;
            } else {
                distance += this.distance(lastElement, element);
            }
            lastElement = element;
            currentDistance += distance;
            array.push(element.height);
            labels.push("KM " + Math.round(currentDistance));
        });
        const data = {
            labels : labels,
            datasets: [
                {
                    label: 'Höhe in Meter',
                    fill: true,
                    backgroundColor: 'rgba(0,191,255,0.4)',
                    pointBorderColor: 'rgba(111, 186, 28, 1)',
                    pointBackgroundColor: 'rgba(111, 186, 28, 1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(111, 186, 28, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: array
                }
            ]
        };
        return(
            <div className="App-Content">
                <Helmet>
                    <title>Höhenansicht</title>
                </Helmet>
                <Header as="h1" color='red'>Aktuelles Rennen im Höhenprofil</Header>
                <Line data={data}/>
            </div>
        );
    }
}

export default HeightView;