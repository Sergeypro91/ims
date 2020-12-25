import React, { memo } from 'react';

const TourniquetInner = () => {
    return (
        <svg viewBox="0 0 20 19">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 18.8333C0.671573 18.8333 0 18.1617 0 17.3333V1.88926C0.122694 0.805363 0.603004 0.0811178 1.71917 0H8.49817C10.2929 0.166597 10.4142 1.05162 10.2313 2.07097C9.14327 3.18218 8.05537 4.29351 6.96742 5.40489C6.41744 5.96672 5.86745 6.52855 5.31743 7.09039V17.3333C5.31743 18.1617 4.64586 18.8333 3.81743 18.8333H1.5ZM13.4266 6.37547C13.3199 5.65209 12.9884 4.95547 12.4313 4.39869L11.931 4.89907C11.7888 5.04153 11.6216 5.20871 11.4367 5.39333L7.44506 9.38496C8.15157 10.0918 9.0837 10.4357 10.01 10.4168L10.0094 15.7779C10.0094 16.102 10.2726 16.3652 10.597 16.3652C10.9218 16.3652 11.1849 16.102 11.1849 15.7779V10.1909C11.6393 10.0194 12.0656 9.75072 12.4313 9.38496C12.9518 8.86482 13.2754 8.22286 13.4024 7.55066H19.4124C19.7369 7.55066 20 7.28753 20 6.96306C20 6.63859 19.7369 6.37547 19.4124 6.37547H13.4266ZM11.1396 3.01911L11.0843 2.97027C10.8538 2.79117 10.5206 2.80745 10.3092 3.01969L6.06664 7.26544C5.83754 7.49512 5.83754 7.86699 6.06664 8.09668L6.08147 8.11179C6.31116 8.3409 6.68302 8.34148 6.91184 8.11179L11.1547 3.86576C11.3835 3.63607 11.3835 3.26421 11.1547 3.03481L11.1396 3.01911Z"
            />
        </svg>
    );
};

export const Tourniquet = memo(TourniquetInner);
