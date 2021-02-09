import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import openModal from 'utils/openModal/openModal';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import Tooltip from 'ui/components/Tooltip/Tooltip';

interface IdentifiersRfidToolbarProps {
    sideFilter: boolean;
    toggleSideFilter: () => void;
}

const IdentifiersRfidToolbarInner = (props: IdentifiersRfidToolbarProps) => {
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.identifiers.identifiersRfid.selectedRow, shallowEqual);

    return (
        <Toolbar>
            <Tooltip id="filter" type="filter">
                <Buttons name="Filter" typical active={props.sideFilter} size="m" onPress={props.toggleSideFilter} />
            </Tooltip>

            <Tooltip id="add" type="add">
                <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />
            </Tooltip>

            <Tooltip id="edit" type="edit">
                <Buttons
                    name="Edit"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('edit', history) : undefined}
                />
            </Tooltip>

            <Tooltip id="import" type="import">
                <Buttons name="Import" size="m" typical={!!selectedRow} disable={!selectedRow} onPress={() => console.log('Import')} />
            </Tooltip>

            <Tooltip id="delete" type="delete">
                <Buttons
                    name="Delete"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('delete', history) : undefined}
                />
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
        </Toolbar>
    );
};

export const IdentifiersRfidToolbar = memo(IdentifiersRfidToolbarInner);
