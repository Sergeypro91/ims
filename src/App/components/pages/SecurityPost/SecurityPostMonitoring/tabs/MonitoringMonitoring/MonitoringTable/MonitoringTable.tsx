import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    getSecurityPostMonitoringEvents,
    requestSecurityPostMonitoringEvents
} from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
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
                                field="data"
                                header="Время события"
                                style={{ width: '10%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="type"
                                header="Код события"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="personName"
                                header="Физ. лицо"
                                style={{ width: '25%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="personId"
                                header="Идентификатор"
                                style={{ width: '15%' }}
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field=""
                                header="Описание события"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field=""
                                header="Источник"
                                sortable
                            />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="data" header="Время события" style={{ width: '10%' }} sortable />
                            <Column field="type" header="Код события" sortable style={{ width: '15%' }} />
                            <Column field="personName" header="Физ. лицо" style={{ width: '25%' }} sortable />
                            <Column field="personId" header="Идентификатор" style={{ width: '15%' }} sortable />
                            <Column field="" header="Описание события" sortable />
                            <Column field="" header="Источник" sortable />
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
