import React, { memo } from 'react';

export const LicenseLogoInner = () => {
    return (
        <svg viewBox="0 0 61 80">
            <path
                d="M49.7561 44.2749C54.1464 41.969 57.9299 37.8891 58.501 33.6319C59.5004 26.0399 54.6104 20.3282 48.3641 17.7029C40.9042 14.5455 45.8655 16.816 17.3465 9.33038C3.64026 5.74723 2.78362 2.41242 3.06917 0C-0.607247 2.41242 -1.74944 15.5388 4.67537 19.5122C11.2787 23.5565 24.4138 24.408 40.9399 29.0909C55.4671 33.1707 53.3255 40.7273 49.7561 44.2749Z"
                fill="#1D68D9"
            />
            <path
                d="M52.6835 46.5102C51.4342 45.7651 50.0422 45.162 48.5787 44.7008C27.9123 39.9824 26.0919 40.0889 19.2388 38.4215C0.571128 33.8804 2.78412 30.1199 2.3201 28.6299C-1.14216 32.284 -1.17785 43.7075 5.21127 47.1487C12.9567 51.2995 26.5916 52.6476 43.8672 56.9403C49.4711 58.3239 52.7906 59.9913 55.2534 61.9425C57.9661 64.1421 58.7157 67.2995 56.6454 69.9958C54.8251 72.3372 49.9351 71.947 44.5097 71.202C34.9082 69.8538 22.701 67.0867 19.2745 66.1643C3.89061 61.9425 2.81981 57.8982 2.3558 56.3727C-1.10646 60.0268 -1.14216 71.4503 5.24696 74.8915C10.3154 77.6232 15.134 79.1842 25.5565 79.7873C33.1949 80.2485 47.0439 80.6742 53.8257 73.6499C54.5038 72.9758 59.7508 69.0024 60.8573 62.1554C61.821 55.7696 58.323 49.8095 52.6835 46.5102Z"
                fill="#1D68D9"
            />
            <path
                d="M36.443 42.0043C36.4073 42.0043 36.4073 42.0043 36.443 42.0043C42.6179 43.3524 48.6144 44.7005 48.6144 44.7005C48.7215 44.736 48.8286 44.7715 48.9357 44.807C49.2212 44.6296 49.5067 44.4877 49.7923 44.3103C53.3616 40.7626 55.5032 33.2061 40.976 29.1263C39.9766 28.8425 38.9772 28.5586 38.0135 28.3103C42.0468 29.9068 47.7935 38.7759 36.443 42.0043Z"
                fill="url(#paint0_linear)"
            />
            <path
                d="M40.2264 69.7716C39.9409 69.9845 39.6554 70.1973 39.3698 70.3747C41.1188 70.7295 42.8321 71.0133 44.474 71.2262C49.8994 71.9712 54.7894 72.3614 56.6097 70.0199C58.7156 67.3592 58.0731 64.1065 55.3248 61.907C50.7917 58.2883 44.8309 57.1419 38.9058 55.7583C43.2604 57.7805 46.9011 64.4501 40.2264 69.7716Z"
                fill="url(#paint1_linear)"
            />
            <linearGradient
                id="paint0_linear"
                x1="45.3069"
                y1="34.5117"
                x2="34.806"
                y2="47.8781"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0363636" stopColor="#1C4E98" />
                <stop offset="0.3152" stopColor="#1D68D9" />
                <stop offset="0.9333" stopColor="#639AED" />
            </linearGradient>
            <linearGradient
                id="paint1_linear"
                x1="49.4176"
                y1="61.7295"
                x2="39.8349"
                y2="76.559"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.0363636" stopColor="#1C4E98" />
                <stop offset="0.3152" stopColor="#1D68D9" />
                <stop offset="0.9333" stopColor="#639AED" />
            </linearGradient>
        </svg>
    );
};

export const LicenseLogo = memo(LicenseLogoInner);
