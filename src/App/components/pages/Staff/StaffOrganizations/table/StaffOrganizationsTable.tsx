import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'App/../redux/store';
import {
    staffOrganizationsToggleSidebar,
    staffOrganizationsSelectedRow
} from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'App/components/global/Popover/Popover';
import { TableBottomCounter } from 'App/components/global/TableBottomCounter/TableBottomCounter';
import { useTable } from 'App/../hooks/useTable/useTable';

const StaffOrganizationsTable = () => {
    const dispatch = useDispatch();
    const tableState = useSelector((state: State) => state.staff.staffOrganizations.organizationsTable, shallowEqual);
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
        dispatch(staffOrganizationsSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [tableState, onKeyDown]);

    useLayoutEffect(() => {
        tableScrolleHeight(tableElement);
    }, [windowSize, tableScrolleHeight]);

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
        onRowDoubleClick: () => dispatch(staffOrganizationsToggleSidebar()),
        onValueChange: (sortedData: any) => console.log('Organizations table data changed', sortedData)
    };

    return (
        <div className="table-wrapper">
            <Popover>
                <div className="table" ref={tableElement}>
                    <DataTable {...tableProps}>
                        <Column field="name" header="Наименование краткое" sortable />
                        <Column field="inn" header="ИНН" sortable />
                        <Column field="status" header="Статус" sortable />
                        <Column field="createdAt" header="Создано" sortable />
                    </DataTable>
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

export default StaffOrganizationsTable;
