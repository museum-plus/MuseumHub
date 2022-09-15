import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph(props) {
    const data = {
        labels: false,
        datasets: [
            {
                label: false,
                data: [3, 3, 16],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.55)',
                    'rgba(255, 255, 255, 0.55)',
                    'rgba(238, 199, 64, 0.71)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(238, 199, 64, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };
    const options = {
        responsive: 'true',
        cutout: 75
    }
    return <Doughnut data={data} options={options}/>;
}
