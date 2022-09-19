import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { db } from '../../database/db';
import { collection, addDoc, doc, onSnapshot, getDocs, setDoc, query, getDoc, where, documentId } from 'firebase/firestore';
import { getRecorridos } from '../../database/getBeepcons';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph(props) {
    // const [turnos, setTurnos] = React.useState(0)
    // React.useEffect(() => {
    //   async function hola() {
    //     let allRecorridos = await getRecorridos();
    //     allRecorridos.forEach((recorrido)=>{
    //       // console.log(recorrido)
    //       console.log(recorrido)
    //       const turnos = recorrido.turnos
    //         turnos.forEach((turno) => {
    //             // const turnoTotal = turno.turno_id
    //             // console.log(turnoTotal);
    //         })
    //       // setTurnos(turnos.length)
    //       setTurnos(turnosTotal.length)
    //     })
    //   }
    //   hola();
    // }, []);
    console.log(props.turno)
    const data = {
        labels: false,
        datasets: [
            {
                label: false,
                data: [3, 3, 22],
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
        animation:{
            duration:1500,
        },
        responsive: 'true',
        cutout: 70
    }
    return <Doughnut data={data} options={options}/>;
}
