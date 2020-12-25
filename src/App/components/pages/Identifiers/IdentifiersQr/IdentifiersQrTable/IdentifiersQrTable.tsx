import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    identifiersQrSelectedRow,
    getIdentifiersQrEvents,
    requestIdentifiersQrEvents
} from 'redux/Identifiers/IdentifiersQr/identifiersQrActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const IdentifiersQrTableInner = () => {
    const dispatch = useDispatch();
    const tableState: any = []; // useSelector((state: State) => state.identifiers.identifiersQr.events, shallowEqual);
    const filterState = false;
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);

    const [
        selectionChangeHandler,
        onKeyDown,
        rowNumberHandler,
        goToRowElement,
        tableScrolleHeight,
        selectedRow,
        rowNumber
    ] = useTable(tableState);

    useEffect(() => {
        dispatch(requestIdentifiersQrEvents());
    }, [dispatch]);

    useEffect(() => {
        dispatch(identifiersQrSelectedRow(selectedRow));
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
        onValueChange: (sortedData: any) => dispatch(getIdentifiersQrEvents(sortedData))
    };

    return (
        <div className="table-wrapper">
            {/* Table */}
            <Popover>
                <div className="table" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="eventDate"
                                header="2D штрих-код"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field=""
                                header="Статус"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="physpersonName"
                                header="Владелец"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="eventCodeName"
                                header="Срок действия"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="sourceName"
                                header="Лимит проходов"
                                sortable
                            />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="eventDate" header="2D штрих-код" sortable />
                            <Column field="" header="Статус" sortable />
                            <Column field="physpersonName" header="Владелец" sortable />
                            <Column field="eventCodeName" header="Срок действия" sortable />
                            <Column field="sourceName" header="Лимит проходов" sortable />
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

export const IdentifiersQrTable = memo(IdentifiersQrTableInner);
