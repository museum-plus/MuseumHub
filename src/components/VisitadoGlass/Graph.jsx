import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { db } from '../../database/db';
import { collection, addDoc, doc, onSnapshot, getDocs, setDoc, query, getDoc, where, documentId } from 'firebase/firestore';
import { getRecorridos } from '../../database/getBeepcons';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph(props) {
    console.log(props.data)
    const data = {
        labels: false,
        datasets: [
            {
                label: false,
                data: [props.data.menor,props.data.medio,props.data.mayor ],
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
        animation: {
            duration: 1500,
        },
        responsive: 'true',
        cutout: 70
    }
    return <Doughnut data={data} options={options} />;
}
