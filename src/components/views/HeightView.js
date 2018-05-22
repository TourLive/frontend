import React, {Component} from "react";
import {Header} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {Line} from 'react-chartjs-2';
import {Chart} from 'react-chartjs-2';

class HeightView extends Component {



    render() {
        const plugins = [{
            afterDraw: (chartInstance, easing) => {
                const ctx = chartInstance.chart.ctx;
                console.log(ctx);
                ctx.fillText("This text drawn by a plugin", 100, 100);
            }
        }];


        const {gpsData} = this.props;
        const {timeline} = this.props;
        const array = [];
        const labels = [];
        gpsData.map(element => {
            array.push(element.height);
            labels.push("KM " + Math.round(element.distance));
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
            <div>
                <Helmet>
                    <title>Höhenansicht</title>
                </Helmet>
                <Header as="h1" color='red'>Aktuelles Rennen im Höhenprofil</Header>
                <Line data={data} plugins={plugins}/>
            </div>
        );
    }
}

export default HeightView;