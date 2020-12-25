import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import {
    staffEmployeesToggleSidebar,
    staffEmployeesToggleToggleBar
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import _ from 'lodash';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { StaffEmployeesToolbar } from './toolbar/StaffEmployeesToolbar';
import { EmployeeDetails } from './sidebar/tabs/EmployeeDetails/EmployeeDetails';
import { EmployeeIdentifiers } from './sidebar/tabs/EmployeeIdentefiers/EmployeeIdentifiers';
import { EmployeeTimetable } from './sidebar/tabs/EmployeeTimetable/EmployeeTimetable';
import { EmployeeSchedule } from './sidebar/tabs/EmployeeSchedule/EmployeeSchedule';
import { StaffEmployeesTable } from './table/StaffEmployeesTable';
import { StaffEmployeeFilter } from './filter/StaffEmployeeFilter';
import { StaffEmployeesModals } from './modals/StaffEmployeesModals';
import './StaffEmployees.scss';

const StaffEmployeesInner = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);

    return (
        <div className="page staff-employees" aria-label="page content">
            <StaffEmployeesToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <StaffEmployeesModals />

            <section className="page__wrapper">
                <StaffEmployeesTable />

                <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                    <StaffEmployeeFilter />
                </SideFilter>

                <Sidebar
                    sidebarName="Данные о сотруднике"
                    icon="SearchUser"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffEmployeesToggleSidebar())}
                    sidebarTrigger={() => dispatch(staffEmployeesToggleToggleBar())}>
                    <TabBar>
                        <Tab header="Общее" index={0}>
                            <EmployeeDetails selectedUser={selectedRow} />
                        </Tab>

                        <Tab header="Календарь" index={1}>
                            <EmployeeTimetable selectedUser={selectedRow} />
                        </Tab>

                        <Tab header="Идентификаторы" index={2}>
                            <EmployeeIdentifiers />
                        </Tab>

                        <Tab header="График" index={3}>
                            <EmployeeSchedule selectedUser={selectedRow} />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const StaffEmployees = memo(StaffEmployeesInner);
