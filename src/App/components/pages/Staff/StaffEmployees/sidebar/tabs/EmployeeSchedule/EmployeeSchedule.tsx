import React from 'react';
import { Accordion } from 'App/components/global/Accordion/Accordion';
import { TableItem } from 'redux/Staff/StaffEmployees/staffEmployeesTypes';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { GeneralInformation } from './GeneralInformation/GeneralInformation';
import { DetailedSchedule } from './DetailedSchedule/DetailedSchedule';
import './EmployeeSchedule.scss';

interface ScheduleProps {
    selectedUser: TableItem | null;
}

export const EmployeeSchedule = (props: ScheduleProps) => {
    return (
        <CustomScrollbar>
            <div className="employee__schedule-tab">
                <Accordion type="simple" header="Общие сведения" trigger={() => console.log('Triggered')}>
                    <GeneralInformation />
                </Accordion>

                <Accordion type="simple" header="Подробный график" trigger={() => console.log('Triggered')}>
                    <DetailedSchedule />
                </Accordion>
            </div>
        </CustomScrollbar>
    );
};
