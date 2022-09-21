import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function BeepconsIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.625 14.5834C30.625 24.7917 17.5 33.5417 17.5 33.5417C17.5 33.5417 4.375 24.7917 4.375 14.5834C4.375 11.1024 5.75781 7.76401 8.21922 5.3026C10.6806 2.84118 14.019 1.45837 17.5 1.45837C20.981 1.45837 24.3194 2.84118 26.7808 5.3026C29.2422 7.76401 30.625 11.1024 30.625 14.5834Z" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 18.9584C19.9162 18.9584 21.875 16.9996 21.875 14.5834C21.875 12.1671 19.9162 10.2084 17.5 10.2084C15.0838 10.2084 13.125 12.1671 13.125 14.5834C13.125 16.9996 15.0838 18.9584 17.5 18.9584Z" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
