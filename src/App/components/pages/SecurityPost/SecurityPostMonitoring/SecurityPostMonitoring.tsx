import React, { useState, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import _ from 'lodash';
import { MonitoringMonitoring } from './tabs/MonitoringMonitoring/MonitoringMonitoring';
// import { StatisticsMonitoring } from './tabs/StatisticsMonitoring/StatisticsMonitoring';
import { SecurityPostMonitoringFilter } from './filter/SecurityPostMonitoringFilter';
import { SecurityPostMonitoringToolbar } from './toolbar/SecurityPostMonitoringToolbar';
import './SecurityPostMonitoring.scss';

const SecurityPostMonitoringInner = () => {
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);

    return (
        <div className="page security-post-monitoring" aria-label="page content">
            <SecurityPostMonitoringToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <section className="page__wrapper">
                <TabBar trigger={toggleBar}>
                    <Tab header="События" index={0}>
                        <MonitoringMonitoring />
                    </Tab>

                    {/* <Tab header="Статистика" index={1}>
                        <StatisticsMonitoring />
                    </Tab> */}
                </TabBar>

                <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                    <SecurityPostMonitoringFilter />
                </SideFilter>
            </section>
        </div>
    );
};

export const SecurityPostMonitoring = memo(SecurityPostMonitoringInner);
