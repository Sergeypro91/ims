import React, { memo } from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
// import { State } from 'redux/store';
import { EquipmentsWizard } from '../../../../components/SetupWizard/Equipments/EquipmentsWizard/EquipmentsWizard';

const SettingsAccesPointsModalsModalsInner = () => {
    // const selectedRow = useSelector((state: State) => state.staff., shallowEqual);

    return (
        <>
            <EquipmentsWizard />
        </>
    );
};

export const SettingsAccesPointsModalsModals = memo(SettingsAccesPointsModalsModalsInner);
