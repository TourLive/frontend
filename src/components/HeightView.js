import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Line} from 'react-chartjs-2';
import {connect} from "react-redux";

class HeightView extends Component {
    render() {
        const {gpsData} = this.props;
        const array = [];
        gpsData.map(element => {
            array.push(element.height);
        });
        const data = {
            datasets: [
                {
                    label: 'Höhenprofil',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
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

function mapStateToProps(store) {
    return {
        gpsData : store.gpsData.data
    }
}

export default connect(mapStateToProps)(HeightView);