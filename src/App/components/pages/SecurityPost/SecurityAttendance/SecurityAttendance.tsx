import React, { useState, useRef, memo } from 'react';
import _ from 'lodash';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { Attending } from './tabs/Attending/Attending';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { SecurityAttendanceToolbar } from './toolbar/SecurityAttendanceToolbar';
import { SecurityAttendanceModals } from './modals/SecurityAttendanceModals';
import './SecurityAttendance.scss';

const SecurityAttendanceInner = () => {
    const [sideFilter, setSideFilter] = useState(false);
    const pageWrapper = useRef<HTMLDivElement>(null);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);

    return (
        <div ref={pageWrapper} className="page security-attendance">
            <SecurityAttendanceToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <SecurityAttendanceModals />

            <section className="page__wrapper">
                <TabBar>
                    <Tab header="Посещаемость" index={0}>
                        <Attending />
                    </Tab>

                    {/* <Tab header="Статистика" index={1}>
                        <StatisticsMonitoring />
                    </Tab> */}
                </TabBar>

                <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки" />
            </section>
        </div>
    );
};

export const SecurityAttendance = memo(SecurityAttendanceInner);
