import React, { useEffect, useLayoutEffect, useRef, memo } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { requestAttendance } from 'redux/SecurityPost/SecurityAttendance/securityAttendanceActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const AttendingTableInner = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.securityPost.postAttendance.attendanceTable, shallowEqual);
    const filterState = useSelector((state: State) => state.securityPost.postAttendance.quickFilter, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);

    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        tableState
    );

    useEffect(() => {
        dispatch(requestAttendance());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(staffEmployeesSelectedRow(selectedRow));
    // }, [dispatch, selectedRow]);

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
        onSelectionChange: selectionChangeHandler
        // onRowDoubleClick: () => dispatch(staffEmployeesToggleSidebar()),
        // onValueChange: (sortedData: any) => dispatch(getStaffEmployees(sortedData))
    };

    return (
        <div className="table">
            {/* Table */}
            <Popover>
                <div className="table__content" ref={tableElement}>
                    {filterState ? (
                        <DataTable {...tableProps}>
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="uuid" header="Дата учёта" sortable />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="name" header="ФИО" sortable />
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
                                field="subdivision"
                                header="Код отклонения"
                                sortable
                            />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="created" header="Вход" sortable />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="created" header="Выход" sortable />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="created"
                                header="Отработанно"
                                sortable
                            />
                            <Column filter filterMatchMode="contains" filterPlaceholder="Поиск" field="created" header="Уволен" sortable />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="uuid" header="Дата учёта" sortable />
                            <Column field="name" header="ФИО" sortable />
                            <Column field="occupation" header="Должность" sortable />
                            <Column field="subdivision" header="Код отклонения" sortable />
                            <Column field="created" header="Вход" sortable />
                            <Column field="created" header="Выход" sortable />
                            <Column field="created" header="Отработанно" sortable />
                            <Column field="created" header="Уволен" sortable />
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

export const AttendingTable = memo(AttendingTableInner);
