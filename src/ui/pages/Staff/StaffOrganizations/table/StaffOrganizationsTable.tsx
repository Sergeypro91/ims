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
import { Organization } from 'api/staff/organizations/organizations.types';
import { SOSetSelectedRow, SOGetOrganizations } from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';

const StaffOrganizationsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { organizations, isQuickFilterActive, isDeletedDisplayed } = useSelector(
        (state: State) => state.staff.staffOrganizations,
        shallowEqual
    );
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? organizations : organizations.filter((organization) => organization.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? organizations : organizations.filter((organization) => organization.deleted === 0),
        loading: organizations.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const StaffOrganizationsNameBody = (option: Organization) => TableBodyDeleted({ deleted: option.deleted, text: option.shortName });

    useEffect(() => {
        dispatch(SOGetOrganizations());
    }, [dispatch]);

    useEffect(() => {
        dispatch(SOSetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [organizations, onKeyDown]);

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
                            body={StaffOrganizationsNameBody}
                            field="shortName"
                            header="Наименование краткое"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="inn"
                            header="ИНН"
                            sortable
                            style={{ width: '10%' }}
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="parentOrgName"
                            header="Ведущая организация"
                            sortable
                        />
                        <Column field="orgState" header="Статус" sortable style={{ width: '20%' }} />
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
                tableRowCount={
                    (isDeletedDisplayed ? organizations : organizations.filter((organization) => organization.deleted === 0)).length
                }
            />
        </div>
    );
};

export default StaffOrganizationsTable;
