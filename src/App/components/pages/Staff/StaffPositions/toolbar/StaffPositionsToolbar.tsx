/* React */
import React from 'react';
/*  */
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'App/../redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import openModal from 'utils/openModal/openModal';
import StaffPositionsToolbarProps from './StaffPositionsToolbar.types';

const StaffPositionsToolbar = (props: StaffPositionsToolbarProps) => {
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.staff.staffPositions.selectedRow, shallowEqual);

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
            </section>
        </Toolbar>
    );
};

export default StaffPositionsToolbar;