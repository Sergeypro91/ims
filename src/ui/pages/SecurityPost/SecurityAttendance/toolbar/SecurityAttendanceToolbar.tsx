import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { securityAttendanceToggleQuickFilter } from 'redux/SecurityPost/SecurityAttendance/securityAttendanceActions';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';

interface ToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const SecurityAttendanceToolbarInner = (props: ToolbarProps) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.securityPost.postAttendance, shallowEqual);

    return (
        <Toolbar>
            <Buttons name="Filter" size="m" active={props.sideFilter} typical onPress={props.toggleSideFilter} />

            <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />

            <Buttons
                name="Edit"
                size="m"
                typical={!!selectedRow}
                disable={!selectedRow}
                onPress={selectedRow ? () => openModal('edit', history) : undefined}
            />

            <Buttons
                name="Delete"
                size="m"
                typical={!!selectedRow}
                disable={!selectedRow}
                onPress={selectedRow ? () => openModal('delete', history) : undefined}
            />

            <Buttons name="QuickFilter" size="m" typical onPress={() => dispatch(securityAttendanceToggleQuickFilter())} />
        </Toolbar>
    );
};

export const SecurityAttendanceToolbar = memo(SecurityAttendanceToolbarInner);
