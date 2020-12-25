import React, { memo } from 'react';

const PreviewInner = () => {
    return (
        <svg viewBox="0 0 32 32">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3738 15.5343C19.3738 17.3976 17.8631 18.9078 16.0003 18.9078C14.1369 18.9078 12.6262 17.3976 12.6262 15.5343C12.6262 13.6709 14.1369 12.1608 16.0003 12.1608C17.8631 12.1608 19.3738 13.6709 19.3738 15.5343ZM15.9997 21.9222C12.4718 21.9222 9.61174 19.0621 9.61174 15.5343C9.61174 12.0064 12.4718 9.14629 15.9997 9.14629C19.5282 9.14629 22.3883 12.0064 22.3883 15.5343C22.3883 19.0621 19.5282 21.9222 15.9997 21.9222ZM16.0003 6C7.16327 6 0 15.4874 0 15.4874C0 15.4874 7.16327 25.0685 16.0003 25.0685C24.8367 25.0685 32 15.4874 32 15.4874C32 15.4874 24.8367 6 16.0003 6Z"
            />
        </svg>
    );
};

export const Preview = memo(PreviewInner);