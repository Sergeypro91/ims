import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SDSetSelectedRow, SDGetDepartments } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';
import { useHistory } from 'react-router-dom';
import openModal from 'utils/openModal/openModal';
import { Department } from 'api/staff/departments/departments.types';
import TableBodyDeleted from 'ui/components/Table/TableBodyDeleted';

const StaffDepartmentsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { departments, isQuickFilterActive, isDeletedDisplayed } = useSelector(
        (state: State) => state.staff.staffDepartments,
        shallowEqual
    );
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? departments : departments.filter((department) => department.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? departments : departments.filter((department) => department.deleted === 0),
        loading: departments.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const StaffDepartmentsNameBody = (option: Department) => TableBodyDeleted({ deleted: option.deleted, text: option.depName });

    useEffect(() => {
        dispatch(SDGetDepartments());
    }, [dispatch]);

    useEffect(() => {
        dispatch(SDSetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [departments, onKeyDown]);

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
                            body={StaffDepartmentsNameBody}
                            field="depName"
                            header="Наименование"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="orgName"
                            header="Организация"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="chiefPersonName"
                            header="Руководитель"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="creationDate"
                            header="Дата создания"
                            sortable
                            style={{ width: '15%' }}
                        />
                    </DataTable>
                </div>
            </Popover>
            <TableBottomCounter
                rowNumber={rowNumberHandler}
                goToRowElement={goToRowElement}
                rowElement={rowNumber.current + 1}
                tableRowCount={(isDeletedDisplayed ? departments : departments.filter((department) => department.deleted === 0)).length}
            />
        </div>
    );
};

export default StaffDepartmentsTable;
