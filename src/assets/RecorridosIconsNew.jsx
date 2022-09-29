import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function RecorridosIconsNew() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.625 13.5V37.5L16.3636 31.5L28.6364 37.5L39.375 31.5V7.5L28.6364 13.5L16.3636 7.5L5.625 13.5Z" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.875 9.375V31.875" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28.125 13.125V35.625" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

