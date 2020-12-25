import React, { memo } from 'react';

const AddInner = () => {
    return (
        <svg viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0077 4C13.0077 3.44772 12.56 3 12.0077 3C11.4554 3 11.0077 3.44772 11.0077 4V11.0002H4C3.44772 11.0002 3 11.4479 3 12.0002C3 12.5525 3.44772 13.0002 4 13.0002H11.0077V20C11.0077 20.5523 11.4554 21 12.0077 21C12.56 21 13.0077 20.5523 13.0077 20V13.0002H20.0152C20.5675 13.0002 21.0152 12.5525 21.0152 12.0002C21.0152 11.4479 20.5675 11.0002 20.0152 11.0002H13.0077V4Z"
            />
        </svg>
    );
};

export const Add = memo(AddInner);
