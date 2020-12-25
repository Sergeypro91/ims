import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';
import { staffEmployeesToggleQuickFilter } from 'redux/Staff/StaffEmployees/staffEmployeesAction';

interface StaffEmployeesToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const StaffEmployeesToolbarInner = (props: StaffEmployeesToolbarProps) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedRow = useSelector((state: State) => state.staff.staffEmployees.selectedRow, shallowEqual);

    return (
        <Toolbar>
            <section className="toolbar__section">
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

                <Buttons
                    name="QuickFilter"
                    size="m"
                    typical
                    onPress={() => dispatch(staffEmployeesToggleQuickFilter())}
                />

                <Buttons
                    name="Show"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('timetable', history) : undefined}
                />
                <Buttons
                    name="Identifiers"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('identifiers-wizard', history) : undefined}
                />
            </section>
        </Toolbar>
    );
};

export const StaffEmployeesToolbar = memo(StaffEmployeesToolbarInner);
