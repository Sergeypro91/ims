import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import openModal from 'utils/openModal/openModal';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import Tooltip from 'ui/components/Tooltip/Tooltip';

const IdentifiersFaceIdToolbarInner = () => {
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.identifiers.identifiersFaceId.selectedRow, shallowEqual);

    return (
        <Toolbar>
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

            <Tooltip id="QuickIssueFaceId" type="QuickIssueFaceId">
                <Buttons
                    name="QuickIssueFaceId"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('quick-issue-faceId-wizard', history) : undefined}
                />
            </Tooltip>
        </Toolbar>
    );
};

export const IdentifiersFaceIdToolbar = memo(IdentifiersFaceIdToolbarInner);
