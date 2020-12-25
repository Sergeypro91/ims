import React, { memo } from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
// import { State } from 'redux/store';
import { AccessPointWizard } from './AccessPointWizard/AccessPointWizard';

const SettingsAccesPointsModalsModalsInner = () => {
    // const selectedRow = useSelector((state: State) => state.staff., shallowEqual);

    return (
        <>
            <AccessPointWizard />
        </>
    );
};

export const SettingsAccesPointsModalsModals = memo(SettingsAccesPointsModalsModalsInner);
