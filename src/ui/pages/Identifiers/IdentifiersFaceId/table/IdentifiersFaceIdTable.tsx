import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    identifiersFaceIdSelectedRow,
    getIdentifiersFaceIdEvents,
    requestIdentifiersFaceIdEvents
} from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const IdentifiersFaceIdTableInner = () => {
    const dispatch = useDispatch();
    const tableState: any = []; // useSelector((state: State) => state.identifiers.identifiersFaceId.events, shallowEqual);
    const filterState = false;
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);

    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        tableState
    );

    useEffect(() => {
        dispatch(requestIdentifiersFaceIdEvents());
    }, [dispatch]);

    useEffect(() => {
        dispatch(identifiersFaceIdSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [tableState, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, filterState, tableScrolleHeight]);

    const tableProps = {
        value: tableState,
        loading: tableState.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => console.log('Double click'),
        onValueChange: (sortedData: any) => dispatch(getIdentifiersFaceIdEvents(sortedData))
    };

    return (
        <div className="table">
            {/* Table */}
            <Popover>
                <div className="table__content" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="eventDate"
                                header="Статус"
                                sortable
                            />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="" header="Владелец" sortable />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="physpersonName"
                                header="Срок действия"
                                sortable
                            />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="" header="Лимит проходов" sortable />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="eventDate" header="Статус" sortable />
                            <Column field="" header="Владелец" sortable />
                            <Column field="physpersonName" header="Срок действия" sortable />
                            <Column field="" header="Лимит проходов" sortable />
                        </DataTable>
                    )}
                </div>
            </Popover>

            <TableBottomCounter
                rowNumber={rowNumberHandler}
                goToRowElement={goToRowElement}
                rowElement={rowNumber.current + 1}
                tableRowCount={tableState.length}
            />
        </div>
    );
};

export const IdentifiersFaceIdTable = memo(IdentifiersFaceIdTableInner);
