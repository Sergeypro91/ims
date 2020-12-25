import React, { memo } from 'react';

const ArrowRightInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z" />
        </svg>
    );
};

export const ArrowRight = memo(ArrowRightInner);
