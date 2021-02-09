import React, { memo } from 'react';

const IdentifiersInner = () => {
    return (
        <svg viewBox="0 0 21 20">
            <path d="M15.1724 12.6013C15.5864 12.6013 15.9224 12.2653 15.9224 11.8513V9.99927C15.9224 9.58527 15.5864 9.24927 15.1724 9.24927H9.48038C9.15638 8.18227 8.17438 7.39827 7.00238 7.39827C5.56838 7.39827 4.40138 8.56527 4.40138 9.99927C4.40138 11.4343 5.56838 12.6013 7.00238 12.6013C8.17438 12.6013 9.15638 11.8173 9.48038 10.7493H11.5924V11.8513C11.5924 12.2653 11.9284 12.6013 12.3424 12.6013C12.7564 12.6013 13.0924 12.2653 13.0924 11.8513V10.7493H14.4224V11.8513C14.4224 12.2653 14.7584 12.6013 15.1724 12.6013ZM5.82738 -0.000732422H14.4964C17.8844 -0.000732422 20.1614 2.37727 20.1614 5.91627V14.0833C20.1614 17.6223 17.8844 19.9993 14.4954 19.9993H5.82738C2.43838 19.9993 0.161377 17.6223 0.161377 14.0833V5.91627C0.161377 2.37727 2.43838 -0.000732422 5.82738 -0.000732422ZM5.90048 10.0002C5.90048 9.39217 6.39548 8.89817 7.00248 8.89817C7.60948 8.89817 8.10448 9.39217 8.10448 10.0002C8.10448 10.6072 7.60948 11.1012 7.00248 11.1012C6.39548 11.1012 5.90048 10.6072 5.90048 10.0002Z" />
        </svg>
    );
};

export const Identifiers = memo(IdentifiersInner);
