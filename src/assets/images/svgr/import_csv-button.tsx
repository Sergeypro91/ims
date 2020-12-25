import React, { memo } from 'react';

const ImportCsvInner = () => {
    return (
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.08934 5.42241C2.84181 5.17241 2.44065 5.17241 2.19313 5.42241C1.93707 5.67241 1.93707 6.07759 2.18459 6.32759L4.63423 8.81034C4.69398 8.87069 4.76226 8.91379 4.83908 8.94828C4.9159 8.98276 4.99272 9 5.07807 9C5.16342 9 5.24878 8.98276 5.32559 8.94828C5.40241 8.91379 5.4707 8.87069 5.53044 8.81034L7.97155 6.32759C8.21907 6.07759 8.21907 5.67241 7.97155 5.42241C7.72402 5.17241 7.32286 5.17241 7.07534 5.42241L5.71822 6.80172L5.71822 2.63793C5.71822 2.28448 5.43655 2 5.07807 2C4.72812 2 4.44646 2.28448 4.44646 2.63793L4.44646 6.80172L3.08934 5.42241ZM15.8282 7.02561C16.0609 7.02292 16.3143 7.02 16.5446 7.02C16.7921 7.02 17 7.22 17 7.47V15.51C17 17.99 15 20 12.5446 20H4.67327C2.08911 20 0 17.89 0 15.29V4.51C0 2.03 1.9901 0 4.46535 0H9.75247C10 0 10.2079 0.21 10.2079 0.46V3.68C10.2079 5.51 11.6931 7.01 13.5149 7.02C13.9313 7.02 14.301 7.02315 14.6258 7.02591C14.8801 7.02807 15.1069 7.03 15.3069 7.03C15.4479 7.03 15.6306 7.02789 15.8282 7.02561ZM16.1047 5.566C15.2908 5.569 14.3324 5.566 13.6423 5.559C12.5472 5.559 11.6452 4.648 11.6452 3.542V0.906C11.6452 0.475 12.1621 0.261 12.4581 0.572C13.2208 1.37218 14.3884 2.59857 15.375 3.63496C15.7744 4.05437 16.144 4.44267 16.4452 4.759C16.7334 5.062 16.5215 5.565 16.1047 5.566Z"
                fill="#293440"
            />
            <path
                d="M6.35107 15.3423C6.31234 15.8778 6.1141 16.2993 5.75635 16.6069C5.40088 16.9146 4.93148 17.0684 4.34814 17.0684C3.71012 17.0684 3.20768 16.8542 2.84082 16.4258C2.47624 15.9951 2.29395 15.4049 2.29395 14.6553V14.3511C2.29395 13.8726 2.37826 13.451 2.54688 13.0864C2.71549 12.7218 2.95589 12.4427 3.26807 12.249C3.58252 12.0531 3.9471 11.9551 4.36182 11.9551C4.93604 11.9551 5.3986 12.1089 5.74951 12.4165C6.10042 12.7241 6.30322 13.1559 6.35791 13.7119H5.33252C5.30745 13.3906 5.21745 13.1582 5.0625 13.0146C4.90983 12.8688 4.67627 12.7959 4.36182 12.7959C4.02002 12.7959 3.76367 12.9189 3.59277 13.165C3.42415 13.4089 3.33757 13.7882 3.33301 14.3032V14.6792C3.33301 15.217 3.4139 15.61 3.57568 15.8584C3.73975 16.1068 3.99723 16.231 4.34814 16.231C4.66488 16.231 4.90072 16.1592 5.05566 16.0156C5.21289 15.8698 5.3029 15.6453 5.32568 15.3423H6.35107ZM9.60498 15.6943C9.60498 15.5007 9.53662 15.3525 9.3999 15.25C9.26318 15.1452 9.01709 15.0358 8.66162 14.9219C8.30615 14.8057 8.02474 14.6917 7.81738 14.5801C7.25228 14.2747 6.96973 13.8634 6.96973 13.3462C6.96973 13.0773 7.04492 12.8381 7.19531 12.6284C7.34798 12.4165 7.56559 12.2513 7.84814 12.1328C8.13298 12.0143 8.45199 11.9551 8.80518 11.9551C9.16064 11.9551 9.47738 12.02 9.75537 12.1499C10.0334 12.2775 10.2487 12.4587 10.4014 12.6934C10.5563 12.9281 10.6338 13.1947 10.6338 13.4932H9.6084C9.6084 13.2653 9.53662 13.0887 9.39307 12.9634C9.24951 12.8358 9.04785 12.772 8.78809 12.772C8.53743 12.772 8.34261 12.8255 8.20361 12.9326C8.06462 13.0374 7.99512 13.1764 7.99512 13.3496C7.99512 13.5114 8.07601 13.647 8.23779 13.7563C8.40186 13.8657 8.64225 13.9683 8.95898 14.064C9.54232 14.2394 9.96729 14.457 10.2339 14.7168C10.5005 14.9766 10.6338 15.3001 10.6338 15.6875C10.6338 16.1182 10.4709 16.4565 10.145 16.7026C9.81917 16.9465 9.38053 17.0684 8.8291 17.0684C8.44629 17.0684 8.09766 16.9989 7.7832 16.8599C7.46875 16.7186 7.22835 16.526 7.06201 16.2822C6.89795 16.0384 6.81592 15.7559 6.81592 15.4346H7.84473C7.84473 15.9837 8.17285 16.2583 8.8291 16.2583C9.07292 16.2583 9.26318 16.2093 9.3999 16.1113C9.53662 16.0111 9.60498 15.8721 9.60498 15.6943ZM13.1699 15.7661L14.2979 12.0234H15.4395L13.7065 17H12.6367L10.9106 12.0234H12.0488L13.1699 15.7661Z"
                fill="white"
            />
        </svg>
    );
};

export const ImportCsv = memo(ImportCsvInner);
