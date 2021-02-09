import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SPSetSelectedRow, SPGetPositions } from 'redux/Staff/StaffPositions/staffPositionsActions';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Popover } from 'ui/components/Popover/Popover';
import { TableBottomCounter } from 'ui/components/TableBottomCounter/TableBottomCounter';
import { useTable } from 'hooks/useTable/useTable';
import { useHistory } from 'react-router-dom';
import openModal from 'utils/openModal/openModal';
import { Position } from 'api/staff/positions/positions.types';
import TableBodyDeleted from 'ui/components/Table/TableBodyDeleted';

const StaffPositionsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { positions, isQuickFilterActive, isDeletedDisplayed } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? positions : positions.filter((position) => position.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? positions : positions.filter((position) => position.deleted === 0),
        loading: positions.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const StaffPositionsNameBody = (option: Position) => TableBodyDeleted({ deleted: option.deleted, text: option.posName });

    useEffect(() => {
        dispatch(SPGetPositions());
    }, [dispatch]);

    useEffect(() => {
        dispatch(SPSetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [positions, onKeyDown]);

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
                            body={StaffPositionsNameBody}
                            field="posName"
                            header="Наименование"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="shortName"
                            header="Организация"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="emplCount"
                            header="Число сотрудников"
                            sortable
                            style={{ width: '20%' }}
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
                tableRowCount={(isDeletedDisplayed ? positions : positions.filter((position) => position.deleted === 0)).length}
            />
        </div>
    );
};

export default StaffPositionsTable;
