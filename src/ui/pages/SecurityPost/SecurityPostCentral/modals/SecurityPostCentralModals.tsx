import React, { memo } from 'react';
import { AccessPointControl } from './AccessPointControl/AccessPointControl';

const SecurityPostCentralModalsInner = () => {
    return (
        <>
            <AccessPointControl />
        </>
    );
};

export const SecurityPostCentralModals = memo(SecurityPostCentralModalsInner);
