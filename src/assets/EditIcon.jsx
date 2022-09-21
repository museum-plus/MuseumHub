import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

export default function EditIcon() {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_138_1196)">
                <path d="M28.7984 12.9161L24.084 8.2016C23.9549 8.07253 23.7798 8 23.5972 8C23.4146 8 23.2394 8.07253 23.1103 8.2016L9.34979 21.9621C9.22585 22.0863 9.15379 22.2528 9.14846 22.428L9.00056 27.2905C8.99478 27.4803 9.06767 27.6641 9.20189 27.7984C9.33124 27.9277 9.5064 28 9.68873 28C9.69571 28 9.70268 27.9999 9.70975 27.9996L14.5721 27.8516C14.7473 27.8462 14.9139 27.7743 15.038 27.6503L28.7985 13.8899C29.0673 13.621 29.0673 13.185 28.7984 12.9161ZM14.2572 26.4835L10.3992 26.601L10.5166 22.7428L18.8822 14.3772L22.6232 18.1176L14.2572 26.4835ZM23.597 17.1439L19.8559 13.4036L23.5971 9.6623L27.3377 13.403L23.597 17.1439Z" fill={theme.color.color} />
            </g>
            <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke={theme.color.color} />
            <defs>
                <clipPath id="clip0_138_1196">
                    <rect width="20" height="20" fill={theme.color.color} transform="translate(9 8)" />
                </clipPath>
            </defs>
        </svg>

    )
}