import React, { memo } from 'react';

const HomeIconInner = () => {
    return (
        <svg viewBox="0 0 22 22">
            <path
                className="cls-1"
                d="M21.63,9.77,11.76.31a1.08,1.08,0,0,0-1.52,0L.37,9.77a1.22,1.22,0,0,0-.29,1.31,1.12,1.12,0,0,0,1.05.76H2.71v9.48a.66.66,0,0,0,.65.68H8.76a.66.66,0,0,0,.65-.68V15.56h3.18v5.76a.66.66,0,0,0,.65.68h5.41a.66.66,0,0,0,.65-.68V11.84h1.58a1.12,1.12,0,0,0,1.05-.76A1.22,1.22,0,0,0,21.63,9.77Z"
            />
            <path className="cls-1" d="M19.13,1.36H14.78l5,4.78V2A.66.66,0,0,0,19.13,1.36Z" />
        </svg>
    );
};

export const HomeIcon = memo(HomeIconInner);
