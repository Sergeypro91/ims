import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    getSecurityPostMonitoringEvents,
    requestSecurityPostMonitoringEvents
} from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';
import './MonitoringTable.scss';

const MonitoringTableInner = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.securityPost.postMonitoring.events, shallowEqual);
    const filterState = useSelector((state: State) => state.securityPost.postMonitoring.quickFilter, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(requestSecurityPostMonitoringEvents());
    }, [dispatch]);

    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        tableState
    );

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
        onValueChange: (sortedData: any) => dispatch(getSecurityPostMonitoringEvents(sortedData))
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
                                field="date"
                                header="Время события"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="personLastName"
                                header="Физ. лицо"
                                style={{ width: '25%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="identificatorUUID"
                                header="Идентификатор"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="codeName"
                                header="Описание события"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="deviceName"
                                header="Источник"
                                sortable
                            />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="date" header="Время события" style={{ width: '15%' }} sortable />
                            <Column field="personLastName" header="Физ. лицо" style={{ width: '25%' }} sortable />
                            <Column field="identificatorUUID" header="Идентификатор" style={{ width: '15%' }} sortable />
                            <Column field="codeName" header="Описание события" sortable />
                            <Column field="deviceName" header="Источник" sortable />
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

export const MonitoringTable = memo(MonitoringTableInner);
