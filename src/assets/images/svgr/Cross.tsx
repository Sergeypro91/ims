import React, { FC } from 'react';

const Cross: FC<{ className?: string; id?: string }> = (props) => (
    <svg
        id={props.id}
        className={props.className}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            className={props.className}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.18614 0.203509C0.914791 -0.0678363 0.474854 -0.0678363 0.203509 0.203509C-0.0678363 0.474854 -0.0678363 0.914791 0.203509 1.18614L4.01743 5.00006L0.20775 8.80973C-0.0635945 9.08108 -0.0635948 9.52102 0.20775 9.79236C0.479096 10.0637 0.919033 10.0637 1.19038 9.79236L5.00006 5.98268L8.81386 9.79649C9.08521 10.0678 9.52515 10.0678 9.79649 9.79649C10.0678 9.52515 10.0678 9.08521 9.79649 8.81386L5.98268 5.00006L9.79254 1.1902C10.0639 0.918852 10.0639 0.478915 9.79254 0.207569C9.5212 -0.0637757 9.08126 -0.0637757 8.80991 0.207569L5.00006 4.01743L1.18614 0.203509Z"
            fill="#828282"
        />
    </svg>
);

export default Cross;
