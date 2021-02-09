import React, { useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { DataTable } from 'primereact/datatable';
import openModal from 'utils/openModal/openModal';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Column } from 'primereact/column';
import { WorkingTimeAccounting } from 'assets/images/svgr/worktime_accounting';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import { State } from 'redux/store';
import { requestReportsWorkingTimeEvents } from 'redux/Reports/ReportsWorkingTime/reportsWorkingTimeActions';
import { Popover } from 'ui/components/Popover/Popover';
import { ReportsWorkingTimeFilter } from './ReportsWorkingTimeFilter/ReportsWorkingTimeFilter';
import './ReportsWorkingTime.scss';

const ReportsWorkingTimeInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [sideFilter, setSideFilter] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const { events } = useSelector((state: State) => state.reports.reportsWorking, shallowEqual);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    useEffect(() => {
        dispatch(requestReportsWorkingTimeEvents());
    }, [dispatch]);
    return (
        <section className="page reports__workingtime">
            {/* Toolbar */}
            <Toolbar>
                <Buttons name="Filter" size="m" typical active={sideFilter} onPress={toggleSideFilter} />
                <Buttons name="ImportPdf" size="m" typical onPress={() => openModal('add', history)} />
                <Buttons name="ImportXls" size="m" typical onPress={selectedRow ? () => openModal('edit', history) : undefined} />
                <Buttons name="ImportCsv" size="m" typical onPress={selectedRow ? () => openModal('delete', history) : undefined} />
                <Buttons name="Print" size="m" typical onPress={selectedRow ? () => openModal('timetable', history) : undefined} />
            </Toolbar>

            <section className="page__wrapper">
                {!!events.length && (
                    <div className="table">
                        <Popover>
                            <div className="table__content">
                                <DataTable
                                    value={events}
                                    loading={events.length === 0}
                                    header="Учет рабочего времени"
                                    className="p-datatable-sm"
                                    scrollable
                                    scrollHeight="90%"
                                    selectionMode="single"
                                    selection={selectedRow}
                                    onSelectionChange={(e) => setSelectedRow(e.value)}
                                    onRowDoubleClick={() => history.push(`${window.location.pathname}/edit`)}
                                >
                                    <Column field="physpersonName" header="Ф.И.О." sortable />
                                    <Column field="physpersonUuid" header="Физ.лицо удалено" sortable />
                                    <Column field="" header="Сотрудник удален" sortable />
                                    <Column field="" header="Сотрудник уволен" sortable />
                                    <Column field="eventCodeName" header="Отработано времени" sortable />
                                    <Column field="sourceName" header="Отработано дней" sortable />
                                    <Column field="sourceName" header="01.08 " sortable />
                                </DataTable>
                            </div>
                        </Popover>
                    </div>
                )}
                {!events.length && (
                    <div className="reports__workingtime__placeholder">
                        <WorkingTimeAccounting />
                        <p className="reports__workingtime__text p--md--bold">Выберите нужные данные в фильтре, чтобы начать работу</p>
                    </div>
                )}
                <SideFilter onClose={toggleSideFilter} isOpen={sideFilter}>
                    <ReportsWorkingTimeFilter />
                </SideFilter>
            </section>
        </section>
    );
};

export const ReportsWorkingTime = memo(ReportsWorkingTimeInner);
