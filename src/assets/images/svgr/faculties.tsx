import React, { memo } from 'react';

const FacultiesInner = () => {
    return (
        <svg viewBox="0 0 20 21">
            <path d="M5 5H13C14 5 15 5.75915 15 7C15 8.24085 15 16 15 16C15 16.6 14.6 17 14 17H11.5V10.5C11.5 9 10.5 8.5 9.5 8.5H3V7C3 6 3.5 5 5 5ZM8 0H18C19.5 0 20 1 20 2V13C20 13.6 19.6 14 19 14H16.5V5.5C16.5 4.5 16 3.5 14.5 3.5H6V2C6 1 6.5 0 8 0Z" />
            <path d="M6.17421 10H3.82579C3.04431 9.99999 2.41441 9.99998 1.919 10.0679C1.40465 10.1385 0.971582 10.2894 0.62763 10.6404C0.283678 10.9913 0.135739 11.4331 0.0665863 11.9579C-1.90479e-05 12.4633 -1.02941e-05 13.106 5.67501e-07 13.9033V17.9537C-1.68336e-05 18.7038 -3.10455e-05 19.3163 0.0648135 19.769C0.130039 20.2243 0.281584 20.6758 0.723682 20.895C1.16578 21.1142 1.60734 20.9569 1.99856 20.7279C2.3875 20.5002 2.85955 20.1218 3.43762 19.6584L3.85262 19.3257C4.19982 19.0474 4.4308 18.8631 4.62266 18.7441C4.80464 18.6311 4.91004 18.604 5 18.604C5.08996 18.604 5.19537 18.6311 5.37734 18.7441C5.5692 18.8631 5.80018 19.0474 6.14738 19.3257L6.56238 19.6584C7.14044 20.1218 7.6125 20.5002 8.00144 20.7279C8.39266 20.9569 8.83422 21.1142 9.27632 20.895C9.71842 20.6758 9.86996 20.2243 9.93519 19.769C10 19.3163 10 18.7038 10 17.9537V13.9033C10 13.106 10 12.4633 9.93341 11.9579C9.86426 11.4331 9.71632 10.9913 9.37237 10.6404C9.02842 10.2894 8.59535 10.1385 8.081 10.0679C7.58559 9.99998 6.95569 9.99999 6.17421 10Z" />
        </svg>
    );
};

export const Faculties = memo(FacultiesInner);
