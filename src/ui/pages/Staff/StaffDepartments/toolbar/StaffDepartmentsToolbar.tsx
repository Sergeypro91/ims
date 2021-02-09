import React from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Switch } from 'ui/components/Switch/Switch';
import Tooltip from 'ui/components/Tooltip/Tooltip';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';
import { State } from 'redux/store';
import {
    SDToggleIsQuickFilterActive,
    SDToggleIsDeletedDisplayed,
    SDGetDepartments
} from 'redux/Staff/StaffDepartments/staffDepartmentsActions';

const StaffDepartmentsToolbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow, isDeletedDisplayed } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);

    return (
        <Toolbar>
            <Tooltip id="add" type="add">
                <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />
            </Tooltip>

            <Tooltip id="edit" type="edit">
                <Buttons name="Edit" size="m" typical={!!selectedRow} disable={!selectedRow} onPress={() => openModal('edit', history)} />
            </Tooltip>

            <Tooltip id="delete" type="delete">
                <Buttons
                    name="Delete"
                    size="m"
                    typical={!!selectedRow}
                    disable={selectedRow ? !!selectedRow.deleted : true}
                    onPress={() => openModal('delete', history)}
                />
            </Tooltip>

            <Tooltip id="restore" type="restore">
                <Buttons
                    name="Restore"
                    size="m"
                    typical={!!selectedRow}
                    disable={selectedRow ? !!!selectedRow.deleted : true}
                    onPress={() => openModal('restore', history)}
                />
            </Tooltip>

            <Tooltip id="refresh" type="refresh">
                <Buttons name="Refresh" size="m" typical onPress={() => dispatch(SDGetDepartments())} />
            </Tooltip>

            <Tooltip id="quickFilter" type="quickFilter">
                <Buttons name="QuickFilter" size="m" typical onPress={() => dispatch(SDToggleIsQuickFilterActive())} />
            </Tooltip>

            <div style={{ marginLeft: 'auto' }} />

            <Tooltip id="showDeleted" type="showDeleted">
                <Switch
                    isActive={isDeletedDisplayed}
                    onTrigger={() => {
                        dispatch(SDToggleIsDeletedDisplayed());
                    }}
                />
            </Tooltip>
        </Toolbar>
    );
};

export default StaffDepartmentsToolbar;
