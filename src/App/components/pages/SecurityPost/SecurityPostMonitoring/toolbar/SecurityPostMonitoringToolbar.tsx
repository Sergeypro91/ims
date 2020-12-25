import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSecurityPostMonitoringQuickFilter } from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';

interface ToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const SecurityPostMonitoringInner = (props: ToolbarProps) => {
    const dispatch = useDispatch();

    return (
        <Toolbar>
            <section className="toolbar__section">
                <Buttons name="Filter" typical active={props.sideFilter} size="m" onPress={props.toggleSideFilter} />

                <Buttons
                    name="QuickFilter"
                    size="m"
                    typical
                    onPress={() => dispatch(toggleSecurityPostMonitoringQuickFilter())}
                />
            </section>
        </Toolbar>
    );
};

export const SecurityPostMonitoringToolbar = memo(SecurityPostMonitoringInner);
