import React, { memo } from 'react';

const InfoInner = () => {
    return (
        <svg viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.621 17.73 20 14.34 20H5.67C2.28 20 0 17.621 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.99 7.061C9.52 7.061 9.13 6.67 9.13 6.191C9.13 5.701 9.52 5.311 10.01 5.311C10.49 5.311 10.88 5.701 10.88 6.191C10.88 6.67 10.49 7.061 9.99 7.061ZM10.87 13.781C10.87 14.261 10.48 14.651 9.99 14.651C9.51 14.651 9.12 14.261 9.12 13.781V9.361C9.12 8.88 9.51 8.481 9.99 8.481C10.48 8.481 10.87 8.88 10.87 9.361V13.781Z"
            />
        </svg>
    );
};

export const Info = memo(InfoInner);