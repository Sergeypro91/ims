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
import { EIGetInstitutions, EISetSelectedRow } from 'redux/Education/EducationInstitutions/educationInstitutionsActions';
import { Institute } from 'api/education/institutions/institutions.types';

const EducationInstitutionsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { institutions, isQuickFilterActive, isDeletedDisplayed } = useSelector(
        (state: State) => state.education.educationInstitutions,
        shallowEqual
    );
    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);
    const tableElement = useRef<HTMLDivElement>(null);
    const [selectionChangeHandler, onKeyDown, rowNumberHandler, goToRowElement, tableScrolleHeight, selectedRow, rowNumber] = useTable(
        isDeletedDisplayed ? institutions : institutions.filter((institution) => institution.deleted === 0)
    );

    const tableProps = {
        value: isDeletedDisplayed ? institutions : institutions.filter((institution) => institution.deleted === 0),
        loading: institutions.length === 0,
        className: 'p-datatable-sm',
        resizableColumns: true,
        scrollable: true,
        scrollHeight: '100%',
        selectionMode: 'single',
        selection: selectedRow,
        onSelectionChange: selectionChangeHandler,
        onRowDoubleClick: () => openModal('edit', history)
    };

    const EducationInstitutionsNameBody = (option: Institute) => TableBodyDeleted({ deleted: option.deleted, text: option.depName });

    useEffect(() => {
        dispatch(EIGetInstitutions());
    }, [dispatch]);

    useEffect(() => {
        dispatch(EISetSelectedRow(selectedRow));
    }, [dispatch, selectedRow]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [institutions, onKeyDown]);

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
                            body={EducationInstitutionsNameBody}
                            field="depName"
                            header="Наименование института"
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
                        />
                    </DataTable>
                </div>
            </Popover>
            <TableBottomCounter
                rowNumber={rowNumberHandler}
                goToRowElement={goToRowElement}
                rowElement={rowNumber.current + 1}
                tableRowCount={(isDeletedDisplayed ? institutions : institutions.filter((institution) => institution.deleted === 0)).length}
            />
        </div>
    );
};

export default EducationInstitutionsTable;
