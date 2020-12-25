import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import {
    staffDepartmentsToggleSidebar,
    staffDepartmentsSelectedRow
} from 'redux/Staff/StaffDepartments/staffDepartmentsAction';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';

const StaffDepartmentsTable = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.staff.staffDepartments.departmentsTable, shallowEqual);
    const filterState = useSelector((state: State) => state.staff.staffDepartments.quickFilter, shallowEqual);
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
        dispatch(staffDepartmentsSelectedRow(selectedRow));
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
        onRowDoubleClick: () => dispatch(staffDepartmentsToggleSidebar()),
        onValueChange: (sortedData: any) => console.log('Departments table changed', sortedData)
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
                                field="name"
                                header="Наименование"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="organization"
                                header="Организация"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="director"
                                header="Руководитель"
                                sortable
                            />
                            <Column
                                filter
                                filterMatchMode="contains"
                                filterPlaceholder="Поиск"
                                field="createdAt"
                                header="Создано"
                                sortable
                            />
                        </DataTable>
                    ) : (
                        <DataTable {...tableProps}>
                            <Column field="name" header="Наименование" sortable />
                            <Column field="organization" header="Организация" sortable />
                            <Column field="director" header="Руководитель" sortable />
                            <Column field="createdAt" header="Создано" sortable />
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

export default StaffDepartmentsTable;
