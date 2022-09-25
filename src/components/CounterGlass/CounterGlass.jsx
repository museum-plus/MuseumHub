import React from 'react'
import './CounterGlass.css'
import ThemeContext from '../../context/theme-context';
import {db} from '../../database/db';
import { collection, doc, onSnapshot,  } from "firebase/firestore";


export default function CounterGlass() {
    const {theme , handleTheme} = React.useContext(ThemeContext);
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

  return (
    <div className='counter-glass__container'>
        <BeepconsItem theme={theme} counter={counter} />
        <RecorridosItem theme={theme} counter={counter}/>
    </div>
  )
}

function BeepconsItem ({theme, counter}) {
    return (
        <div style={theme.glass} className='counter-glass__item'>
            <div className='counter-glass__item__title'>Beepcons</div>
            <div className='counter-glass__item__value'>{counter.beepcons}</div>
        </div>
    )
}

function RecorridosItem ({theme, counter}) {
    return (
        <div style={theme.glass} className='counter-glass__item'>
            <div className='counter-glass__item__title'>Recorridos</div>
            <div className='counter-glass__item__value'>{counter.recorridos}</div>
        </div>
    )
}
