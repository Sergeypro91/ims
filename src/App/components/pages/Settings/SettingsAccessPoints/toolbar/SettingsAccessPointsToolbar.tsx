import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import openModal from 'utils/openModal/openModal';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';

const SettingsAccessPointsToolbarInner = () => {
    const history = useHistory();

    return (
        <Toolbar>
            <section className="toolbar__section">
                <Buttons name="Filter" size="m" typical onPress={() => console.log('Pressing first button')} />

                <Buttons name="QuickFilter" size="m" typical onPress={() => console.log('Pressing second button')} />

                <Buttons
                    name="AccessPoint"
                    size="m"
                    typical
                    // disable={!selectedRow}
                    // onPress={selectedRow ? () => openModal('identifiers-wizard', history) : undefined
                    onPress={() => openModal('access-point-wizard', history)}
                />
            </section>
        </Toolbar>
    );
};

export const SettingsAccessPointsToolbar = memo(SettingsAccessPointsToolbarInner);
