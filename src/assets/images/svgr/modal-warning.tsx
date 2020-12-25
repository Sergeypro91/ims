import React, { memo } from 'react';

const ModalWarningInner = () => {
    return (
        <svg viewBox="0 0 32 30">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0697 2.95443L31.079 22.813C31.1097 22.8683 31.1369 22.9256 31.1603 22.9844C31.3573 23.478 31.4654 23.9963 31.4935 24.5117L31.4938 24.5184L31.4938 24.5184C31.6222 27.0916 29.6962 29.3575 27.0948 29.4978C27.0679 29.4992 27.041 29.4999 27.0141 29.4999H5.09555C5.07744 29.4999 5.05941 29.4996 5.04146 29.499C4.9943 29.5007 4.94664 29.5002 4.89858 29.4975C4.38228 29.4676 3.87179 29.3527 3.38684 29.1513L3.3813 29.149C0.994082 28.1468 -0.105684 25.3819 0.836395 22.9905C0.860398 22.9295 0.888366 22.8702 0.920118 22.813L11.9292 2.95472C12.3459 2.18222 12.9693 1.53738 13.7345 1.10325C16.0057 -0.192396 18.8382 0.672699 20.0697 2.95443ZM5.04578 26.5008C5.0623 26.5002 5.0789 26.4999 5.09555 26.4999H26.9668C27.822 26.4351 28.5454 25.662 28.4977 24.6713C28.4877 24.4935 28.4546 24.3247 28.4017 24.171L17.4415 4.40095L17.4318 4.38309C16.9779 3.53755 15.9876 3.2712 15.2202 3.70952L15.2156 3.71214L15.2156 3.71213C14.95 3.86261 14.7228 4.09329 14.5677 4.38249L14.5576 4.40095L3.59856 24.1689C3.28812 25.074 3.73459 26.042 4.53993 26.3818C4.70016 26.4479 4.87005 26.4879 5.04578 26.5008ZM13.9999 20.9999H17.9999V23.9999H13.9999V20.9999ZM17.9999 9.99988H13.9999V18.9999H17.9999V9.99988Z"
            />
        </svg>
    );
};

export const ModalWarning = memo(ModalWarningInner);