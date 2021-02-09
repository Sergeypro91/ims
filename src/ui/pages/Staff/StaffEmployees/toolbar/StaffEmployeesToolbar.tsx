import React from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';
import Tooltip from 'ui/components/Tooltip/Tooltip';
import {
    SEGetEmployees,
    SEGetExtendedEmployee,
    SEToggleIsDeletedDisplayed,
    SEToggleIsQuickFilterActive
} from 'redux/Staff/StaffEmployees/staffEmployeesActions';
import { Switch } from 'ui/components/Switch/Switch';

const StaffEmployeesToolbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow, isDeletedDisplayed } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    return (
        <Toolbar>
            <Tooltip id="add" type="add">
                <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />
            </Tooltip>

            <Tooltip id="edit" type="edit">
                <Buttons name="Edit" size="m" typical={!!selectedRow} disable={!selectedRow} onPress={() => openModal('edit', history)} />
            </Tooltip>

            <Tooltip id="delete" text="Уволить">
                <Buttons
                    name="Delete"
                    size="m"
                    typical={!!selectedRow}
                    disable={selectedRow ? !!selectedRow.dismissed : true}
                    onPress={() => openModal('delete', history)}
                />
            </Tooltip>

            <Tooltip id="restore" type="restore">
                <Buttons
                    name="Restore"
                    size="m"
                    typical={!!selectedRow}
                    disable={selectedRow ? !!!selectedRow.dismissed : true}
                    onPress={() => openModal('restore', history)}
                />
            </Tooltip>

            <Tooltip id="refresh" type="refresh">
                <Buttons
                    name="Refresh"
                    size="m"
                    typical
                    onPress={() => {
                        dispatch(SEGetEmployees());
                        if (selectedRow) {
                            dispatch(SEGetExtendedEmployee(selectedRow.employeeUuid));
                        }
                    }}
                />
            </Tooltip>

            <Tooltip id="quickFilter" type="quickFilter">
                <Buttons name="QuickFilter" size="m" typical onPress={() => dispatch(SEToggleIsQuickFilterActive())} />
            </Tooltip>

            <Tooltip id="identifiersWizard" type="identifiersWizard">
                <Buttons
                    name="Wizard"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('identifiers-wizard', history) : undefined}
                />
            </Tooltip>

            <Tooltip id="QuickIssueRfid" type="QuickIssueRfid">
                <Buttons
                    name="QuickIssueRfid"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('quick-issue-rfid-wizard', history) : undefined}
                />
            </Tooltip>

            <Tooltip id="QuickIssueFaceId" type="QuickIssueFaceId">
                <Buttons
                    name="QuickIssueFaceId"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('quick-issue-faceId-wizard', history) : undefined}
                />
            </Tooltip>

            <Tooltip id="QuickIssue2d" type="QuickIssue2d">
                <Buttons
                    name="QuickIssue2d"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('quick-issue-2d-wizard', history) : undefined}
                />
            </Tooltip>

            <div style={{ marginLeft: 'auto' }} />

            <Tooltip id="showDeleted" type="showDeleted">
                <Switch
                    isActive={isDeletedDisplayed}
                    onTrigger={() => {
                        dispatch(SEToggleIsDeletedDisplayed());
                    }}
                />
            </Tooltip>
        </Toolbar>
    );
};

export default StaffEmployeesToolbar;
