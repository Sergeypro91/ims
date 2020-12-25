import React, { memo } from 'react';

const LetOutManyInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M10.296 7.71L14.621 12 10.296 16.29 11.704 17.71 17.461 12 11.704 6.29z" />
            <path d="M6.704 6.29L5.296 7.71 9.621 12 5.296 16.29 6.704 17.71 12.461 12z" />
        </svg>
    );
};

export const LetOutMany = memo(LetOutManyInner);
