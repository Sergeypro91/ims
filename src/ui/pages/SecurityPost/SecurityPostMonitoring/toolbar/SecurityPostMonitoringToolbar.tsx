import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSecurityPostMonitoringQuickFilter } from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import Tooltip from 'ui/components/Tooltip/Tooltip';

interface ToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const SecurityPostMonitoringInner = (props: ToolbarProps) => {
    const dispatch = useDispatch();

    return (
        <Toolbar>
            <Tooltip id="filter" type="filter">
                <Buttons name="Filter" typical active={props.sideFilter} size="m" onPress={props.toggleSideFilter} />
            </Tooltip>

            <Tooltip id="quickFilter" type="quickFilter">
                <Buttons name="QuickFilter" size="m" typical onPress={() => dispatch(toggleSecurityPostMonitoringQuickFilter())} />
            </Tooltip>
        </Toolbar>
    );
};

export const SecurityPostMonitoringToolbar = memo(SecurityPostMonitoringInner);
