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
        scales: {
            r: {
                pointLabels:{
                    font:{
                        size: 10,
                        color: "green"
                    }
                },
                max: 10,
                min: 1
            }
        }
    };
    const graphData = {
        labels: ["Vocabulary", "Grammar", "Pronunciation", "Listening", "Conversation"],
        datasets:[
            {
                label: "Initial",
                data: [data.levels[0].initial, data.levels[1].initial, data.levels[2].initial, data.levels[3].initial, data.levels[4].initial],
                backgroundColor: "rgba(00, 255, 00, .1)",
                borderColor: '#00FF00',
                borderWidth: 1
            },
            {
                label: "Final",
                data: [data.levels[0].final, data.levels[1].final, data.levels[2].final, data.levels[3].final, data.levels[4].final],
                backgroundColor: "transparent",
                borderColor: 'green',
                borderWidth: 1
            },
            {
                label: "Target",
                data: [data.levels[0].target, data.levels[1].target, data.levels[2].target, data.levels[3].target, data.levels[4].target],
                backgroundColor: "transparent",
                borderColor: 'red',
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