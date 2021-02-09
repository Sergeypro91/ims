import React, { FC } from 'react';

const ArrowDown: FC<{ className?: string, id?: string }> = (props) => (
    <svg
        id={props.id}
        className={props.className}
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            className={props.className}
            d="M10.5134 0L6 4.22005L1.48659 0L0 1.38997L6 7L12 1.38997L10.5134 0Z"
            fill="#828282"
        />
    </svg>
);

export default ArrowDown;
