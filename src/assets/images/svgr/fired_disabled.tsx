import React, { memo } from 'react';

const FiredDisabledIconInner = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="3"
                stroke="#DBE7F9"
                strokeWidth="2"
            />
        </svg>
    );
};

export const FiredDisabled = memo(FiredDisabledIconInner);
