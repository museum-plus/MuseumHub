import React from 'react'
import './CounterGlass.css'
import ThemeContext from '../../context/theme-context';

export default function CounterGlass() {
    const {theme , handleTheme} = React.useContext(ThemeContext);
  return (
    <div className='counter-glass__container'>
        <BeepconsItem theme={theme} />
        <RecorridosItem theme={theme}/>
    </div>
  )
}

function BeepconsItem ({theme}) {
    return (
        <div style={theme.glass} className='counter-glass__item'>
            <div className='counter-glass__item__title'>Beepcons</div>
            <div className='counter-glass__item__value'>0</div>
        </div>
    )
}

function RecorridosItem ({theme}) {
    return (
        <div style={theme.glass} className='counter-glass__item'>
            <div className='counter-glass__item__title'>Recorridos</div>
            <div className='counter-glass__item__value'>0</div>
        </div>
    )
}
