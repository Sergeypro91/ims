import React, { memo } from 'react';

const LetOutOneInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M7.707 17.707L13.414 12 7.707 6.293 6.293 7.707 10.586 12 6.293 16.293zM15 6H17V18H15z" />
        </svg>
    );
};

export const LetOutOne = memo(LetOutOneInner);
