import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';
import { useHistory } from 'react-router-dom';
import openModal from 'utils/openModal/openModal';
import TableBodyDeleted from 'ui/components/Table/TableBodyDeleted';
import { Employee } from 'api/staff/employees/employees.types';
import { SEGetEmployees, SEGetExtendedEmployee, SESetSelectedRow } from 'redux/Staff/StaffEmployees/staffEmployeesActions';

const StaffEmployeesTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { employees, isQuickFilterActive, isDeletedDisplayed } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? employees : employees.filter((employee) => employee.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? employees : employees.filter((employee) => employee.dismissed === 0),
        loading: employees.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const StaffEmployeesNameBody = (option: Employee) => TableBodyDeleted({ deleted: option.dismissed, text: option.physpersonName });

    useEffect(() => {
        dispatch(SEGetEmployees());
        if (selectedRow) {
            dispatch(SEGetExtendedEmployee(selectedRow.employeeUuid));
        }
    }, [dispatch, selectedRow]);

    useEffect(() => {
        if (selectedRow) {
            dispatch(SEGetExtendedEmployee(selectedRow.employeeUuid));
        }
    }, [dispatch, selectedRow]);

    useEffect(() => {
        dispatch(SESetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [employees, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, isQuickFilterActive, tableScrolleHeight]);

    return (
        <div className="table">
            <Popover>
                <div className="table__content" ref={tableElement}>
                    <DataTable {...tableProps}>
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            body={StaffEmployeesNameBody}
                            field="physpersonName"
                            header="Фамилия имя отчество"
                            sortable
                            style={{ width: '30%' }}
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="empId"
                            header="Табельный №"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="departmentName"
                            header="Подразделение"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="organizationName"
                            header="Организация"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="positionName"
                            header="Должность"
                            sortable
                        />
                    </DataTable>
                </div>
            </Popover>
            <TableBottomCounter
                rowNumber={rowNumberHandler}
                goToRowElement={goToRowElement}
                rowElement={rowNumber.current + 1}
                tableRowCount={(isDeletedDisplayed ? employees : employees.filter((employee) => employee.deleted === 0)).length}
            />
        </div>
    );
};

export default StaffEmployeesTable;
