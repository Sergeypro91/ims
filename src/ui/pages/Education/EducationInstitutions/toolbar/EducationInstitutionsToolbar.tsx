import React from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';
import Tooltip from 'ui/components/Tooltip/Tooltip';
import { Switch } from 'ui/components/Switch/Switch';
import {
    EIGetInstitutions,
    EIToggleIsDeletedDisplayed,
    EIToggleIsQuickFilterActive
} from 'redux/Education/EducationInstitutions/educationInstitutionsActions';

const EducationInstitutionsToolbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow, isDeletedDisplayed } = useSelector((state: State) => state.education.educationInstitutions, shallowEqual);

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
                <Buttons name="Refresh" size="m" typical onPress={() => dispatch(EIGetInstitutions())} />
            </Tooltip>

            <Tooltip id="quickFilter" type="quickFilter">
                <Buttons name="QuickFilter" size="m" typical onPress={() => dispatch(EIToggleIsQuickFilterActive())} />
            </Tooltip>

            <div style={{ marginLeft: 'auto' }} />

            <Tooltip id="showDeleted" type="showDeleted">
                <Switch
                    isActive={isDeletedDisplayed}
                    onTrigger={() => {
                        dispatch(EIToggleIsDeletedDisplayed());
                    }}
                />
            </Tooltip>
        </Toolbar>
    );
};

export default EducationInstitutionsToolbar;
