import React from 'react'
import './CounterGlass.css'
import ThemeContext from '../../context/theme-context';
import { db } from '../../database/db';
import { collection, doc, onSnapshot, } from "firebase/firestore";
import { motion } from 'framer-motion';
import PuntoColor from '../../assets/PuntoColor';
import RecorridosIconsNew from '../../assets/RecorridosIconsNew';


export default function CounterGlass() {
    const { theme, handleTheme } = React.useContext(ThemeContext);
    const [counter, setCounter] = React.useState({
        beepcons: 0,
        recorridos: 0,
    });

    React.useEffect(() => {
        const qBeepcons = collection(db, 'beepcons');
        const qRecorridos = collection(db, 'recorridos');
        const unsubscribeBeepcons = onSnapshot(qBeepcons, (querySnapshot) => {
            setCounter((prevState) => ({
                ...prevState,
                beepcons: querySnapshot.size,
            }));
        }
        );
        const unsubscribeRecorridos = onSnapshot(qRecorridos, (querySnapshot) => {
            setCounter((prevState) => ({
                ...prevState,
                recorridos: querySnapshot.size,
            }));
        }
        );
        return () => {
            unsubscribeBeepcons();
            unsubscribeRecorridos();
        }
    }, []);

    //Todo mal el merge
    return (
        <div className='counter-glass__container'>
            <BeepconsItem theme={theme} counter={counter} />
            <RecorridosItem theme={theme} counter={counter} />
        </div>
    )
}

function BeepconsItem({ theme, counter }) {
    return (
        <motion.div style={theme.glass} className='counter-glass__item'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className='counter-glass__item__icon'>
                <PuntoColor color={theme.fondo.color} />
            </div>
            <div className='counter-glass__item__title'>Beepcons </div>
            <div className='counter-glass__item__value'>{counter.beepcons}</div>
        </motion.div>
    )
}

function RecorridosItem({ theme, counter }) {
    return (
        <motion.div style={theme.glass} className='counter-glass__item'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className='counter-glass__item__icon'>
                <RecorridosIconsNew />
            </div>
            <div className='counter-glass__item__title'>Recorridos </div>
            <div className='counter-glass__item__value'>{counter.recorridos}</div>
        </motion.div>
    )
}
