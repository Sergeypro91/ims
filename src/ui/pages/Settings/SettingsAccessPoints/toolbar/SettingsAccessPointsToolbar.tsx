import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import openModal from 'utils/openModal/openModal';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';

const SettingsAccessPointsToolbarInner = () => {
    const history = useHistory();

    return (
        <Toolbar>
            <Buttons name="Filter" size="m" typical onPress={() => console.log('Pressing first button')} />

            <Buttons name="QuickFilter" size="m" typical onPress={() => console.log('Pressing second button')} />

            <Buttons
                name="Wizard"
                size="m"
                typical
                // disable={!selectedRow}
                // onPress={selectedRow ? () => openModal('identifiers-wizard', history) : undefined
                onPress={() => openModal('access-point-wizard', history)}
            />
        </Toolbar>
    );
};

export const SettingsAccessPointsToolbar = memo(SettingsAccessPointsToolbarInner);
