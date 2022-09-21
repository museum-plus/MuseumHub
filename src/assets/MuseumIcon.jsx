import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function MuseumIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="31" height="32" viewBox="0 0 31 32" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path d="M4.625 24.7805L1 26.9756V31H30V26.9756L26.375 24.7805M4.625 24.7805H26.375M4.625 24.7805V11.9756M26.375 24.7805V11.9756M26.375 11.9756H30V8.31707L15.1375 1L1 8.31707V11.9756H4.625M26.375 11.9756H4.625M10.1 14.1707V22.5854H13V14.1707H10.1ZM17.5 14.1707V22.5854H20.7625V14.1707H17.5Z" stroke={theme.color.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}