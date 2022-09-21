import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function homeIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    console.log(theme.color, "hola");
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.4024 11.7027L16.1524 1.41556C15.4926 0.861481 14.5074 0.86148 13.8476 1.41556L1.59762 11.7027C1.21784 12.0217 1 12.4824 1 12.9667V27.3205C1 28.248 1.7835 29 2.75 29H9.75C10.7165 29 11.5 28.248 11.5 27.3205V20.6023C11.5 19.6747 12.2835 18.9228 13.25 18.9228H16.75C17.7165 18.9228 18.5 19.6747 18.5 20.6023V27.3205C18.5 28.248 19.2835 29 20.25 29H27.25C28.2165 29 29 28.248 29 27.3205V12.9667C29 12.4824 28.7822 12.0217 28.4024 11.7027Z" stroke={theme.color.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}