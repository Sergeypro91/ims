import React, { memo } from 'react';

const СheckMarkInner = () => {
    return (
        <svg viewBox="0 0 30 30">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM13.3409 22.2717L22.8955 10.9683L20.6044 9.03162L13.2533 17.7282L8.85736 12.9167L6.64258 14.9403L13.3409 22.2717Z"
            />
        </svg>
    );
};

export const СheckMark = memo(СheckMarkInner);
