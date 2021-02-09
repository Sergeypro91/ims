import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import _ from 'lodash';
import { identifiersRfidToggleSideFilter, identifiersRfidToggleSidebar } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { IdentifiersRfidTable } from './table/IdentifiersRfidTable';
import { IdentifiersRfidGeneral } from './tabs/IdentifiersRfidGeneral/IdentifiersRfidGeneral';
import { IdentifiersRfidHistory } from './tabs/IdentifiersRfidHistory/IdentifiersRfidHistory';
import { IdentifiersRfidFilters } from './filters/IdentifiersRfidFilters';
import { IdentifiersRfidModals } from './modals/IdentifiersRfidModals';
import { IdentifiersRfidToolbar } from './toolbar/IdentifiersRfidToolbar';
import './IdentifiersRfid.scss';

const IdentifiersRfidInner = () => {
    const dispatch = useDispatch();
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sidebarOpened = useSelector((state: State) => state.identifiers.identifiersRfid.sidebarOpened, shallowEqual);
    const sideFilter = useSelector((state: State) => state.identifiers.identifiersRfid.sideFilter, shallowEqual);

    const triggerFilter = () => {
        dispatch(identifiersRfidToggleSideFilter());
    };

    const triggerFilterDebounce = _.debounce(triggerFilter, 250);

    return (
        <div className="page identifiers-rfid" aria-label="page content">
            <IdentifiersRfidToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <IdentifiersRfidModals />

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <IdentifiersRfidTable />

                    <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                        <IdentifiersRfidFilters />
                    </SideFilter>
                </div>

                <Sidebar
                    label="Данные об идентификаторе"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    toggleIsOpen={() => dispatch(identifiersRfidToggleSidebar())}
                >
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общее" index={0}>
                            <IdentifiersRfidGeneral />
                        </Tab>

                        <Tab header="История" index={1}>
                            <IdentifiersRfidHistory />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const IdentifiersRfid = memo(IdentifiersRfidInner);
