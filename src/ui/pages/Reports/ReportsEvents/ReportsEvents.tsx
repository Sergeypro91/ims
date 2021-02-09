import React, { useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { State } from '../../../../redux/store';
import { requestReportsEvents } from '../../../../redux/Reports/ReportsEvents/reportsEventsActions';
import { Popover } from '../../../../ui/components/Popover/Popover';
import './ReportsEvents.scss';

const ReportsEventsInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedRow, setSelectedRow] = useState(null);
    const { events } = useSelector((state: State) => state.reports.reportsEvents, shallowEqual);

    useEffect(() => {
        dispatch(requestReportsEvents());
    }, [dispatch]);

    console.log(events);

    return (
        <div className="reports-events">
            <div className="table">
                {/* Table */}
                <Popover>
                    <div className="table__content">
                        <DataTable
                            value={events}
                            loading={events.length === 0}
                            header="События"
                            className="p-datatable-sm"
                            scrollable
                            scrollHeight="90%"
                            selectionMode="single"
                            selection={selectedRow}
                            onSelectionChange={(e) => setSelectedRow(e.value)}
                            onRowDoubleClick={() => history.push(`${window.location.pathname}/edit`)}
                        >
                            <Column field="eventDate" header="Дата" />
                            <Column field="physpersonName" header="Ф.И.О." />
                            <Column field="" header="Должность" />
                            <Column field="" header="Подразделение" />
                            <Column field="eventCodeName" header="Событие" />
                            <Column field="sourceName" header="Источник" />
                        </DataTable>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export const ReportsEvents = memo(ReportsEventsInner);
