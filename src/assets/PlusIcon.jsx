import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function PlusIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_127_1333)">
                <path d="M17.5 0C7.85077 0 0 7.8501 0 17.5C0 27.1499 7.85077 35 17.5 35C27.1492 35 35 27.1499 35 17.5C35 7.8501 27.1492 0 17.5 0ZM17.5 33.6538C8.59317 33.6538 1.34615 26.4068 1.34615 17.5C1.34615 8.59317 8.59317 1.34615 17.5 1.34615C26.4068 1.34615 33.6538 8.59317 33.6538 17.5C33.6538 26.4068 26.4068 33.6538 17.5 33.6538Z" fill={theme.color.color}/>
                <path d="M25.9136 16.8269H18.1732V9.42308C18.1732 9.05087 17.8717 8.75 17.5001 8.75C17.1286 8.75 16.827 9.05087 16.827 9.42308V16.8269H9.08665C8.71511 16.8269 8.41357 17.1278 8.41357 17.5C8.41357 17.8722 8.71511 18.1731 9.08665 18.1731H16.827V26.25C16.827 26.6222 17.1286 26.9231 17.5001 26.9231C17.8717 26.9231 18.1732 26.6222 18.1732 26.25V18.1731H25.9136C26.2851 18.1731 26.5867 17.8722 26.5867 17.5C26.5867 17.1278 26.2851 16.8269 25.9136 16.8269Z" fill={theme.color.color}/>
            </g>
            <defs>
                <clipPath id="clip0_127_1333">
                    <rect width="35" height="35" fill={theme.color.color} />
                </clipPath>
            </defs>
        </svg>
    )
}