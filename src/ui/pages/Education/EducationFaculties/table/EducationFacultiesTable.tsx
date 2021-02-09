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
import { EFGetFaculties, EFSetSelectedRow } from 'redux/Education/EducationFaculties/educationFacultiesActions';
import { Faculty } from 'api/education/faculties/faculties.types';

const EducationFacultiesTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { faculties, isQuickFilterActive, isDeletedDisplayed } = useSelector(
        (state: State) => state.education.educationFaculties,
        shallowEqual
    );
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? faculties : faculties.filter((faculty) => faculty.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? faculties : faculties.filter((faculty) => faculty.deleted === 0),
        loading: faculties.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const EducationFacultiesNameBody = (option: Faculty) => TableBodyDeleted({ deleted: option.deleted, text: option.depName });

    useEffect(() => {
        dispatch(EFGetFaculties());
    }, [dispatch]);

    useEffect(() => {
        dispatch(EFSetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [faculties, onKeyDown]);

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
                            body={EducationFacultiesNameBody}
                            field="depName"
                            header="Наименование факультета"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="parentDepartmentName"
                            header="Институт"
                            sortable
                        />
                        <Column
                            filter={isQuickFilterActive}
                            filterMatchMode="contains"
                            filterPlaceholder="Поиск"
                            field="chiefPersonName"
                            header="Декан"
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
                tableRowCount={(isDeletedDisplayed ? faculties : faculties.filter((faculty) => faculty.deleted === 0)).length}
            />
        </div>
    );
};

export default EducationFacultiesTable;
