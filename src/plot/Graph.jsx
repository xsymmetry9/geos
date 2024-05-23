import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import {Radar} from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Graph = (data) =>{
    const options = {
        plugins:{
            layout:{
                padding: 0
            },
            tooltip: false,

            legend:{
                position: "bottom",
                align: "center",
                title: {
                    position: "center",
                },
                labels:{
                    font: {size: 10},
                    color: "black"
                }
            },
        },

        scales: {
            r: {
                min: 1,
                max: 10,
                ticks: {
                    stepSize: 2
                },
                padding: 0,
                display: true
            }
        }
    };
    const graphData = {
        labels: ["Vocabulary", "Grammar", "Pronunciation", "Listening", "Conversation"],
        datasets:[
            {
                label: "Initial",
                data: [data.levels[0].initial, data.levels[1].initial, data.levels[2].initial, data.levels[3].initial, data.levels[4].initial],
                backgroundColor: "rgba(0,0,250,.1)",
                borderColor: 'rgb(0, 0, 250)',
                borderWidth: 1
            },
            {
                label: "Final",
                data: [data.levels[0].final, data.levels[1].final, data.levels[2].final, data.levels[3].final, data.levels[4].final],
                backgroundColor: "rgba(0, 250, 0, .1)",
                borderColor: 'rgb(0, 250, 0)',
                borderWidth: 1
            },
            {
                label: "Target",
                data: [data.levels[0].target, data.levels[1].target, data.levels[2].target, data.levels[3].target, data.levels[4].target],
                backgroundColor: "rgba(250, 0, 0, .1)",
                borderColor: 'rgb(250, 0, 0)',
                borderWidth: 1
            }

        ]
    }
    
    return(
        <>
            <div className="graph-container">
                <Radar
                    data = {graphData}
                    options = {options}
                />
            </div>
        
        </>
    )
}

export default Graph;