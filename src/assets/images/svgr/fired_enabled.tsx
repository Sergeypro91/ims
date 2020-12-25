import React, { memo } from 'react';

const FiredEnabledIconInner = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="4" fill="#1D68D9" />
        </svg>
    );
};

export const FiredEnabled = memo(FiredEnabledIconInner);
