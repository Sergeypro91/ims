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
import { EGGetGroups, EGSetSelectedRow } from 'redux/Education/EducationGroups/educationGroupsActions';
import { Group } from 'api/education/groups/groups.types';

const EducationGroupsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { groups, isQuickFilterActive, isDeletedDisplayed } = useSelector(
        (state: State) => state.education.educationGroups,
        shallowEqual
    );
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? groups : groups.filter((group) => group.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? groups : groups.filter((group) => group.deleted === 0),
        loading: groups.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const EducationGroupsNameBody = (option: Group) => TableBodyDeleted({ deleted: option.deleted, text: option.depName });

    useEffect(() => {
        dispatch(EGGetGroups());
    }, [dispatch]);

    useEffect(() => {
        dispatch(EGSetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [groups, onKeyDown]);

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
                            body={EducationGroupsNameBody}
                            field="depName"
                            header="Наименование группы"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="instituteName"
                            header="Институт"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="facultyName"
                            header="Факультет"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="tribuneName"
                            header="Кафедра"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="chiefPersonName"
                            header="Куратор группы"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="creationDate"
                            header="Дата создания"
                            sortable
                        />
                    </DataTable>
                </div>
            </Popover>
            <TableBottomCounter
                rowNumber={rowNumberHandler}
                goToRowElement={goToRowElement}
                rowElement={rowNumber.current + 1}
                tableRowCount={(isDeletedDisplayed ? groups : groups.filter((group) => group.deleted === 0)).length}
            />
        </div>
    );
};

export default EducationGroupsTable;
