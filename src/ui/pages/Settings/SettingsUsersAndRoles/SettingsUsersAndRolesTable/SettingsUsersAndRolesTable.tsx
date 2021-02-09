import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsUsersAndRolesSelectedRow,
    getSettingsUsersAndRolesEvents,
    requestSettingsUsersAndRolesEvents
} from 'redux/Settings/SettingsUsersAndRoles/settingsUsersAndRolesActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const SettingsUsersAndRolesTableInner = () => {
    const dispatch = useDispatch();
    const tableState = [[]]; // useSelector((state: State) => state.settings.settingsUsersAndRoles.events, shallowEqual);
    const filterState = false;
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);

    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        tableState
    );

    useEffect(() => {
        dispatch(requestSettingsUsersAndRolesEvents());
    }, [dispatch]);

    useEffect(() => {
        dispatch(settingsUsersAndRolesSelectedRow(selectedRow));
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
        onValueChange: (sortedData: any) => dispatch(getSettingsUsersAndRolesEvents(sortedData))
    };

    return (
        <div className="table">
            {/* Table */}
            <Popover>
                <div className="table__content" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="eventDate" header="Логин" sortable />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="" header="Сотрудник" sortable />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="physpersonName"
                                header="Создан"
                                sortable
                            />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="" header="Статус" sortable />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="eventDate" header="Логин" sortable />
                            <Column field="" header="Сотрудник" sortable />
                            <Column field="physpersonName" header="Создан" sortable />
                            <Column field="" header="Статус" sortable />
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

export const SettingsUsersAndRolesTable = memo(SettingsUsersAndRolesTableInner);
