import React, { useState, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import './SecurityPostCentral.scss';
import { securityPostCentralToggleSidebar } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import _ from 'lodash';
import { SecurityPostCentralFilter } from './filter/SecurityPostCentralFilter';
import { SecurityPostCentralToolbar } from './toolbar/SecurityPostCentralToolbar';
import { SecurityPostCentralModals } from './modals/SecurityPostCentralModals';
import { MonitoringPost } from './content/MonitoringPost';
import { Events } from './sidebar/Events';

const SecurityPostCentralInner = () => {
    const dispatch = useDispatch();
    const { sidebarOpened } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);
    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);

    return (
        <div className="page security-post-central" aria-label="page content">
            <SecurityPostCentralToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <SecurityPostCentralModals />

            <section className="page__wrapper">
                <MonitoringPost />

                <Sidebar
                    label="События"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    toggleIsOpen={() => dispatch(securityPostCentralToggleSidebar())}
                >
                    <Events />
                </Sidebar>

                <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки">
                    <SecurityPostCentralFilter />
                </SideFilter>
            </section>
        </div>
    );
};

export const SecurityPostCentral = memo(SecurityPostCentralInner);
