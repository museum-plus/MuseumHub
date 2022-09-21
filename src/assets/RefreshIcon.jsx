import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function RefreshIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_205_1583)">
                <path d="M6.54293 9.90671C9.47527 5.7224 14.3318 3.12705 19.5276 3.12705C28.2566 3.12705 35.3582 10.2286 35.3582 18.9576H38.4852C38.4852 8.50433 29.9809 0 19.5276 0C15.8754 0 12.329 1.0412 9.2718 3.01114C7.3347 4.25925 5.65412 5.8405 4.29656 7.67097L0.216797 3.61081V15.4274H12.0902L6.54293 9.90671Z" fill={theme.color.color} />
                <path d="M39.7829 24.5726H27.9094L33.4567 30.0934C30.5244 34.2776 25.6679 36.8731 20.4721 36.8731C11.743 36.8731 4.64146 29.7715 4.64146 21.0425H1.5144C1.5144 31.4958 10.0187 40.0001 20.4721 40.0001C24.1242 40.0001 27.6707 38.9589 30.7278 36.989C32.665 35.7408 34.3455 34.1595 35.7031 32.3291L39.7827 36.3892V24.5726H39.7829Z" fill={theme.color.color} />
            </g>
            <defs>
                <clipPath id="clip0_205_1583">
                    <rect width="40" height="40" fill={theme.color.color} />
                </clipPath>
            </defs>
        </svg>

    )
}
