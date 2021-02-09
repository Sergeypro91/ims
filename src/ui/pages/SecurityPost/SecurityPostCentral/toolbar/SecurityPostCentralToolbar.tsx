import React, { memo } from 'react';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import Tooltip from 'ui/components/Tooltip/Tooltip';

interface SecurityPostCentralToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const SecurityPostCentralToolbarInner = (props: SecurityPostCentralToolbarProps) => {
    return (
        <Toolbar>
            <Tooltip id="filter" type="filter">
                <Buttons name="Filter" size="m" typical active={props.sideFilter} onPress={props.toggleSideFilter} />
            </Tooltip>

            <Tooltip id="videoControl" type="videoControl">
                <Buttons name="Control" size="m" typical onPress={() => console.log('Click!')} />
            </Tooltip>

            <div style={{ marginLeft: 'auto' }} />
            <Buttons name="Bell" size="m" danger onPress={() => console.log('Click!')} />
            <Buttons name="BlockUnLock" size="m" danger onPress={() => console.log('Click!')} />
            <Buttons name="SecurityCall" size="m" danger onPress={() => console.log('Click!')} />
        </Toolbar>
    );
};

export const SecurityPostCentralToolbar = memo(SecurityPostCentralToolbarInner);
