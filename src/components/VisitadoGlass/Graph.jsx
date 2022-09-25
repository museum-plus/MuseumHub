import React, { useContext, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { db } from '../../database/db';
import { collection, addDoc, doc, onSnapshot, getDocs, setDoc, query, getDoc, where, documentId } from 'firebase/firestore';
import { getRecorridos } from '../../database/getBeepcons';
import { Doughnut } from 'react-chartjs-2';
import ThemeContext from '../../context/theme-context';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph(props) {
    const { theme, handleTheme } = useContext(ThemeContext);
    const data = {
        labels: false,
        datasets: [
            {
                label: false,
                data: [props.data.menor,props.data.medio,props.data.mayor ],
                backgroundColor: [
                    theme.graph.menor.background,
                    theme.graph.medio.background,
                    theme.graph.mayor.background,
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
        cutout: 65
    }
    return <Doughnut data={data} options={options} />;
}
