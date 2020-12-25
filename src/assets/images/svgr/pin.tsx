import React, { memo } from 'react';

const PinInner = () => {
    return (
        <svg viewBox="0 0 64 64">
            <path d="M32 2a22 22 0 0 0-6 43.1L32 62l6-16.9A22 22 0 0 0 32 2zm7.4 32.1L32 28.7l-7.4 5.4 2.9-8.7L20 20h9.2l2.8-8.7 2.8 8.7H44l-7.4 5.4z"></path>
        </svg>
    );
};

export const Pin = memo(PinInner);
