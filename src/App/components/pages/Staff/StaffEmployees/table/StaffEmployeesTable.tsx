import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    staffEmployeesToggleSidebar,
    staffEmployeesSelectedRow,
    getStaffEmployees,
    requestEmployees
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const StaffEmployeesTableInner = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.staff.staffEmployees.employeesTable, shallowEqual);
    const filterState = useSelector((state: State) => state.staff.staffEmployees.quickFilter, shallowEqual);
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
        dispatch(requestEmployees());
    }, [dispatch]);

    useEffect(() => {
        dispatch(staffEmployeesSelectedRow(selectedRow));
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
        header: 'Сотрудники',
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => dispatch(staffEmployeesToggleSidebar()),
        onValueChange: (sortedData: any) => dispatch(getStaffEmployees(sortedData))
    };

    return (
        <div className="table-wrapper">
            <Popover>
                <div className="table" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="uuid"
                                header="Табельный №"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="name"
                                header="Фамилия Имя Отчество"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="subdivision"
                                header="Подразделение"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="occupation"
                                header="Должность"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="created"
                                header="Принят"
                                sortable
                            />
                            <Column field="created" header="Уволен" sortable />
                            <Column field="created" header="Удален" sortable />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="uuid" header="Табельный №" sortable />
                            <Column field="name" header="Фамилия Имя Отчество" sortable />
                            <Column field="subdivision" header="Подразделение" sortable />
                            <Column field="occupation" header="Должность" sortable />
                            <Column field="created" header="Принят" sortable />
                            <Column field="created" header="Уволен" sortable />
                            <Column field="created" header="Удален" sortable />
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

export const StaffEmployeesTable = memo(StaffEmployeesTableInner);
